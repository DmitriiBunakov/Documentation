//?=============================================================================
//? /Change detection/
//? запускается асинхронно для батчинга, dom обновлен будет в следующем тике vue, мы можем дождаться через await nextTick(vue global function)
//? запускается при:
//? ref