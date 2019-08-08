export default (d: any, s: any, id: any, jsSrc: any, cb: any) => {
    const element = d.getElementsByTagName(s)[0]
    const fjs = element
    let js = element
    js = d.createElement(s)
    js.id = id
    js.src = jsSrc
    if (fjs && fjs.parentNode) {
        fjs.parentNode.insertBefore(js, fjs)
    } else {
        d.head.appendChild(js)
    }
    js.onload = cb
}