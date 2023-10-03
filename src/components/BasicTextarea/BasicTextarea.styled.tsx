import styled from "styled-components";

export const FormFieldContainer = styled.div<object>`
    display: flex;
    flex-direction: column;
    width: 100%;

    &.error {
    }

    & label {
        font-size: 0.9rem;

        &:has(+ textarea:focus) {
            color: #7077ff;
        }
    }

    & textarea {
        background: none;
        border-bottom: 2px solid #fff;
        outline: none;
        padding-bottom: 0.4rem;

        &:focus {
            border-color: #7077ff;
        }

        &::placeholder {
            color: #474d91;
        }
    }
`;
