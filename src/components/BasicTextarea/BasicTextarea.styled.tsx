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
            color: var(--purple-001);
        }
    }

    & textarea {
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
