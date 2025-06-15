import Stickers from "./stickers";
import SectionTitle from "../shared/section-title";
import { TEAMS_STICKER_IMAGE } from "@/config/teams";

export default function Teams() {
    return (
        <div style={{ backgroundColor: "#BC82FE" }}>
            <SectionTitle
                title={"Our Team"}
                stickerImage={TEAMS_STICKER_IMAGE}
            />
            <Stickers />
        </div>
    );
}
