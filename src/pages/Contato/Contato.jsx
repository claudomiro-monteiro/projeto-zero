import React, { useState } from 'react'
import { ContainerWapper, Title } from '../../components/ContainerWapper/style'
import { useFormik } from "formik";
import * as Yup from "yup";
// import { IoMdSend } from 'react-icons/io'
import * as MdIcons from 'react-icons/md'
import { mask as masker, unMask } from "remask";
import { Body, Button, ButtonMsg, Form, InputData, Label, Left, Right, Wrapper } from './style';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import axios from 'axios';

const InputMask = ({ mask, value, onChange, ...props }) => {
    const handleChange = (ev) => {
        const unMaskedValue = unMask(ev.target.value, mask);
        const maskedValue = masker(unMaskedValue, mask);
        onChange && onChange(ev.target.name)(maskedValue);
    };

    const maskedValue = masker(unMask(value), mask);

    return <input {...props} value={maskedValue} onChange={handleChange} />;
};

export const Contato = () => {

    const api = axios.create({
        baseURL: process.env.REACT_APP_API_URL
    })

    const [msgOk, setMsgOk] = useState(false);
    const [msgErro, setMsgErro] = useState(false);

    const [spinner, setSpinner] = useState(false)

    const handleSubmit = (values) => {

        setSpinner(true)

        const formData = new FormData();
        Object.keys(values).forEach(key => formData.append(key, values[key]));
        api.post('/contato', formData, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        })

            .then(response => {
                console.log(response.status)
                setMsgOk(true)
                setSpinner(false)
            })
            .catch((error) => {
                console.log(error.response.status);
                setMsgErro(true)
                setSpinner(false)
            });

        setTimeout(() => {
            setMsgOk(false);
            setMsgErro(false);
            formik.resetForm();
        }, 10000)

    }

    const formik = useFormik({
        initialValues: {
            nome: "",
            email: "",
            telefone: "",
            mensagem: ""
        },
        validationSchema: Yup.object({
            nome: Yup.string()
                .min(3, "Nome incompleto.")
                .required("Digite seu nome."),
            email: Yup.string().email("Email inválido.").required("Digite seu email."),
            telefone: Yup.string()
                .min(14, "Telefone inválido.")
                .required("Digite seu telefone."),
            mensagem: Yup.string()
                .min(10, "Sua mensagem deve conter mais de 10 caracteres.")
                .required("Digite sua mensagem.")
        }),

        onSubmit: (handleSubmit)

    });

    return (
        <ContainerWapper id="contato">
            <Title>Contato</Title>
            <Body>
                <Form onSubmit={formik.handleSubmit}>
                    <Wrapper>
                        <Left>
                            <InputData>
                                <input
                                    id="nome"
                                    name="nome"
                                    type="text"
                                    className="form_input"
                                    placeholder=" "
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.nome}
                                />
                                <Label htmlFor="nome" className="form_label">Nome</Label>
                                {formik.touched.nome && formik.errors.nome ? (
                                    <span>{formik.errors.nome}</span>
                                ) : null}
                            </InputData>
                            <InputData>
                                <input
                                    id="email"
                                    name="email"
                                    type="text"
                                    className="form_input"
                                    placeholder=" "
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.email}
                                />
                                <Label htmlFor="email" className="form_label">Email</Label>
                                {formik.touched.email && formik.errors.email ? (
                                    <span>{formik.errors.email}</span>
                                ) : null}
                            </InputData>
                            <InputData>
                                <InputMask
                                    id="telefone"
                                    name="telefone"
                                    type="text"
                                    className="form_input"
                                    placeholder=" "
                                    mask={["(99) 9999-9999", "(99) 9 9999-9999"]}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.telefone}
                                />
                                <Label htmlFor="telefone" className="form_label">Telefone</Label>
                                {formik.touched.telefone && formik.errors.telefone ? (
                                    <span>{formik.errors.telefone}</span>
                                ) : null}

                            </InputData>
                        </Left>
                        <Right>
                            <InputData>
                                <textarea
                                    id="mensagem"
                                    name="mensagem"
                                    type="text"
                                    className="form_input"
                                    placeholder=" "
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.mensagem}
                                />
                                <Label htmlFor="mensagem" className="form_label">Mensagem</Label>
                                {formik.touched.mensagem && formik.errors.mensagem ? (
                                    <span>{formik.errors.mensagem}</span>
                                ) : null}

                            </InputData>
                        </Right>
                    </Wrapper>
                    <ButtonMsg>
                        {msgErro && <span className="msgerro">Mensagem não enviada. Tente mais tarde.</span>}
                        {msgOk && <span className="msg">Mensagem enviada com sucesso!</span>}
                        <Button>
                            <button type="submit">
                                {spinner && <FontAwesomeIcon icon={faSpinner} spin />}
                                {!spinner && <span>Enviar <MdIcons.MdSend /> </span>}
                            </button>
                        </Button>
                    </ButtonMsg>
                </Form>
            </Body>
        </ContainerWapper>
    )
}
