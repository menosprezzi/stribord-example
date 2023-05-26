import { ExtensionManifest } from "@stribord/react-client";

const manifest: ExtensionManifest = {
  type: "extension",
  id: "@stribord-examples/extension",
  implementations: {
    '@stribord-examples/app': {
      'routes': () => import('./implementations/leads-routes').then(mod => mod.LeadsRoutes),
      "dashboard-card": () =>
        import("./implementations/leads-dashboard-card").then(
          (mod) => mod.LeadsDashboardCard
        ),
    },
  },
};

export default manifest;
