import type { FC, PropsWithChildren } from 'https://esm.sh/v103/@types/react@18.0.26/X-YS9yZWFjdDpwcmVhY3QvY29tcGF0CmUvcHJlYWN0L2NvbXBhdA/index.d.ts';
import type { SWRConfiguration, FullConfiguration, ProviderConfiguration, Cache } from '../types.d.ts';
declare type Config = SWRConfiguration & Partial<ProviderConfiguration> & {
    provider?: (cache: Readonly<Cache>) => Cache;
};
export declare const SWRConfigContext: import("https://esm.sh/v103/@types/react@18.0.26/X-YS9yZWFjdDpwcmVhY3QvY29tcGF0CmUvcHJlYWN0L2NvbXBhdA/index.d.ts").Context<Partial<FullConfiguration<Cache<any>>>>;
declare const SWRConfig: FC<PropsWithChildren<{
    value?: Config | ((parentConfig?: Config) => Config);
}>>;
export default SWRConfig;
