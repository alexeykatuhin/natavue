<script>
import '@fortawesome/fontawesome-free/css/all.css'

export default {
  name: 'MenuItem',
  functional: true,
  props: {
    icon: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    }
  },
  methods:{
    styleIcon (icon){
      return icon + " svg-icon"
    }
  },
  render(h, context) {
    const { icon, title } = context.props
    const vnodes = []
    function    styleIcon (icon){
      return icon + " svg-icon"
    }
    if (icon) {
       vnodes.push(<i class={styleIcon(icon)}></i>)
    }

    if (title) {
      vnodes.push(<span slot='title'>{(title)}</span>)
           
     
    }
    return vnodes
  }
}
</script>
