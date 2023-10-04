import styled from "styled-components";
import { breakpoints } from "../../styles";

export const FormFieldContainer = styled.div<object>`
    display: flex;
    flex-direction: column;
    width: 100%;

    &.error {
    }

    @media screen and (min-width: ${breakpoints.md}) {
        width: calc(50% - 1rem);
    }

    & label {
        font-size: 0.9rem;

        &:has(+ input:focus) {
            color: var(--purple-001);
        }
    }

    & input {
        background: none;
        border-bottom: 2px solid var(--white);
        outline: none;
        padding-bottom: 0.4rem;

        &:focus {
            border-color: var(--purple-001);
        }

        &::placeholder {
            color: var(--purple-002);
        }
    }
`;
