import {exampleFunction} from 'lib-a'
import root from 'proto'
const buf = root.mynamespace.Msg.encode({field: "value"}).finish()
const original = root.mynamespace.Msg.decode(buf)
const orig2 = root.mynamespace.Msg.decode(buf)
console.log("hi " + exampleFunction(1, 1))
console.log(original.field,buf, orig2.field)