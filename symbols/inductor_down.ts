import { modifySymbol } from "../drawing/modify-symbol/modify-symbol"
import svgJson from "assets/generated/inductor.json"

export default modifySymbol(svgJson)
  .rotateRightFacingSymbol("up")
  .labelPort("right1", ["1"])
  .labelPort("left1", ["2"])
  .changeTextAnchor("{REF}", "middle_right")
  .changeTextAnchor("{VAL}", "middle_left")
  .build()
