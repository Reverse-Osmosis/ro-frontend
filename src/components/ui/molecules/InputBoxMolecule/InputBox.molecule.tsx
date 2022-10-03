import {InoutBoxH2, InoutBoxP, InputBoxSubWrapper, InputBoxWrapper} from "./InputBox.styled";
import {IconAtom} from "../../atoms/IconAtom/Icon.atom";

export const InputBoxMolecule = () => {
    return (
        <InputBoxWrapper>
            <InputBoxSubWrapper>
                <InoutBoxP>Project</InoutBoxP>
                <InoutBoxH2>Project Name</InoutBoxH2>
            </InputBoxSubWrapper>
            <IconAtom src='https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745' width='4.2rem'/>
        </InputBoxWrapper>
    )
}
