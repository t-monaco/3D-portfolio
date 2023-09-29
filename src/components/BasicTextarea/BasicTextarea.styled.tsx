import styled from "styled-components";

export const FormFieldContainer = styled.div<object>`
    display: flex;
    flex-direction: column;
    width: 100%;

    &.error {
    }

    & label {
    }

    & textarea {
        background: none;
        border-bottom: 2px solid black;
        outline: none;
        padding-bottom: 0.4rem;

        &:focus {
            border-color: red;
        }
    }
`;
