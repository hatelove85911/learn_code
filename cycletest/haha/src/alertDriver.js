export default function alertDriver(stream$) {
  stream$.addListener({
    next: message => window.alert(message),
    error: e => console.error(e),
    complete: () => {}
  })
}
