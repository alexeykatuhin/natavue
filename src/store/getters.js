const getters = {
  sidebar: state => state.app.sidebar,
  language: state => state.app.language,
  size: state => state.app.size,
  device: state => state.app.device,
  errorLogs: state => state.errorLog.logs,
  routes: state => state.router.routes,
}
export default getters
