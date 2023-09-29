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
    }

    & input {
        background: none;
        border-bottom: 2px solid black;
        outline: none;
        padding-bottom: 0.4rem;

        &:focus {
            border-color: red;
        }
    }
`;
