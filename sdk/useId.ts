/**
 * As of July 2023, Fresh has a bug where preact's useId returns the same id
 * for different islands, thus creating duplicate ids on the final markup
 *
 * This hook uses a non deterministic approach to creating ids, thus
 * preventing duplicate ids being used on the markup. The drawback
 * of this approach is creating hydration mismatches
 */

import { useId as usePreactId, useMemo } from "preact/hooks";

export const useId = () =>
  useMemo(() => `${usePreactId()}${Math.trunc(Math.random() * 1e6)}`, []);
