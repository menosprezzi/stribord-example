import { Slot } from "@stribord/react-client";

import React from "react";

import { DashboardCardProps } from "../components/dashboard-card";
import { FilterBy } from "../types/filters";

interface DashboardCardSlotProps {
  wrapper: React.ComponentType<DashboardCardProps>;
  filterBy: FilterBy;
}

/**
 * @stribordExtensionPoint 'dashboard-card'
 * @description Add a new card to Home Dashboard
 */
export type DashboardCardSlot = Slot<DashboardCardSlotProps>;
