"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("detect-gpu"),t=require("use-asset");exports.useDetectGPU=s=>t.useAsset((()=>e.getGPUTier(s)),"useDetectGPU");
