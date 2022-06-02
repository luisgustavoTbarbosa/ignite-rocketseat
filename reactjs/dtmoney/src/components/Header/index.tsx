import { useState } from 'react';
import Modal from 'react-modal';
import logoImg from '../../assets/logo.svg';


import { Container, Content } from './styles';

interface HeaderProps {
    onOpenNewTrasanctionModal: () => void;
}

export function Header({ onOpenNewTrasanctionModal }: HeaderProps) {
    return (
        <Container>
            <Content>
                <img src={logoImg} alt="dtmoney" />
                <button type="button" onClick={onOpenNewTrasanctionModal}>
                    Nova transação
                </button>
            </Content>
        </Container>
    )
}