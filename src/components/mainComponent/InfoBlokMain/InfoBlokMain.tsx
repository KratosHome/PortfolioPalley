import {InfoBlokMainStyle} from "./InfoBlokMainStyle";
import {InfoBlokMainType} from "./InfoBlokMainType";
import React, {memo} from "react";
import { MayButton } from "../../UL";

const InfoBlokMain: React.FC<InfoBlokMainType> = ({
                                                      img,
                                                      h3Text,
                                                      contentText,
                                                      buttonText,
                                                  }) => {
    return (
        <InfoBlokMainStyle>
            <img className="InfoBlokMainImg" src={img} alt={h3Text}/>
            <div className="InfoBlokMainContainer">
                <h3 className="InfoBlokMain_h3">{h3Text}</h3>
                <div className="InfoBlokMainText">
                    {contentText}
                </div>
                <MayButton
                    linkTo={"/"}
                    backgroundColor={"black"}
                    colorText={"white"}
                >
                    {buttonText}
                </MayButton>
            </div>
        </InfoBlokMainStyle>
    )
};
export default memo(InfoBlokMain);