import { getGPUTier } from 'detect-gpu';
import { useAsset } from 'use-asset';

const useDetectGPU = props => useAsset(() => getGPUTier(props), 'useDetectGPU');

export { useDetectGPU };
