import { reverse } from './helpers'

function ReverseName (props) {
    const {name} = props
    return <p className="name-reversed">
    Also, {name} backwards is {reverse(name)}
  </p>
}
export default ReverseName