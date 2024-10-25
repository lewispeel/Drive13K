const appId = process.env.APPLICATION_ID
const appName = process.env.APPLICATION_NAME
const appUrl = process.env.APPLICATION_URL
const widgetVersion = process.env.WIDGET_VERSION

if (!appId || !appName || !appUrl || !widgetVersion) {
  console.error('missing environment variables, check readme')
  process.exit(1);
}

const capabilities = {
  app: [
    { name: "local-services-2" },
    { name: "wan-lan" },
    { name: "dbus-ipc" },
    { name: "memory-intensive" },
    { name: "voice-disabled" },
    { name: "storage" },
  ],
  epg: [
    { name: 'home-app' },
    { name: 'firebolt' },
    { name: 'storage' },
    { name: 'local-services-1' },
    { name: 'wan-lan' },
    { name: 'https-mutual-authentication' },
    { name: 'client-api' },
    { name: 'private-storage', value: 255 },
    { name: 'log-levels', value: 'default,milestone,fatal' },
    { name: 'issue-notifications' },
    { name: 'memory-intensive' },
  ],
}

module.exports = {
  appId,
  appName,
  appUrl,
  widgetVersion,
  enableDebugger: true,
  type: 'html',
  filters: [
    { filter: 'platformVariant', name: 'RDK-STB' },
    { filter: 'platformVariant', name: 'RDK-PANEL' },
  ],
  capabilities: appId === 'com.sky.epgui' ? capabilities.epg : capabilities.app,
}
