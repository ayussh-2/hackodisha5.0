import Stickers from "./stickers";
import SectionTitle from "../shared/section-title";
import { TEAMS_STICKER_IMAGE } from "@/config/teams";

export default function Teams() {
    return (
        <div style={{ backgroundColor: "#BC82FE", overflow: 'visible', height: 'auto'}}>
            <SectionTitle
                title={"OUR TEAMS"}
                stickerImage={TEAMS_STICKER_IMAGE}
                lineGradient="purple"
            />
            <Stickers />
        </div>
    );
}
