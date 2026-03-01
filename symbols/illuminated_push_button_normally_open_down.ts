import { modifySymbol } from "../drawing/modify-symbol/modify-symbol"
import svgJson from "assets/generated/illuminated_push_button_normally_open.json"

export default modifySymbol(svgJson)
  .rotateRightFacingSymbol("left")
  .labelPort("left1", ["1"])
  .labelPort("right1", ["2"])
  .changeTextAnchor("{REF}", "middle_top")
  .changeTextAnchor("{VAL}", "middle_bottom")
  .build()
