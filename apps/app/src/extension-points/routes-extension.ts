import { Factory } from "@stribord/core-client";
import { ReactElement } from "react";

/**
 * @stribordExtensionPoint 'routes'
 * @description Add new routes to the app
 */
export type RoutesFactory = Factory<void, ReactElement[]>;
