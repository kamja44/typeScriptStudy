/**
 * Multiple Ways to Import and Export
 */
// import { IdolModel as IM, rose, number, ICat } from "./2_export_1";

// console.log(new IM("아이유", 23));
// console.log(new IdolModel("아이유", 23)); // Error => IM으로 IdolModel의 이름을 변경했음

// * => 모든거 다 가져올 것 => 가져온 모든것을 allTogether로 명명함
// import * as allTogether from "./2_export_1";

// console.log(allTogether.number);
// console.log(allTogether.rose);

// import cf, { rose, number } from "./2_export_1";

// console.log(cf);
// console.log(rose);

// baseUrl => tsconfig.json에서 baseUrl옵션을 설정해야 함
import { IdolModel } from "15_import_and_export/2_export_1";
