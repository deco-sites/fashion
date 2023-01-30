declare namespace globalThis {
  let __partytownGlobalOptionsStorage: { forward: string[] };
}

globalThis.__partytownGlobalOptionsStorage = {
  forward: [],
};

export const collectForward = (forward: string[]) => {
  globalThis.__partytownGlobalOptionsStorage.forward = [
    ...globalThis.__partytownGlobalOptionsStorage.forward,
    ...forward,
  ];
};

export const readForward = () => {
  const forward = Array.from(
    new Set(globalThis.__partytownGlobalOptionsStorage.forward),
  );

  return {
    forward,
  };
};
