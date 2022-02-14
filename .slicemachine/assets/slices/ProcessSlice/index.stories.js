import MyComponent from '../../../../slices/ProcessSlice';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/ProcessSlice'
}


export const _DefaultSlice = () => ({
  components: {
    MyComponent,
    SliceZone
  },
  methods: {
    resolve() {
      return MyComponent
    }
  },
  data() {
    return {
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"process_slice","items":[{"ProcessImage":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1504198070170-4ca53bb1c1fa?w=900&h=500&fit=crop"},"ProcessContent":[{"type":"paragraph","text":"Et magna occaecat irure quis quis. Do non incididunt sit sint ex proident adipisicing irure nulla duis ullamco laborum reprehenderit sit.","spans":[]}]},{"ProcessImage":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1589321578146-4c1ba445cc88?w=900&h=500&fit=crop"},"ProcessContent":[{"type":"paragraph","text":"In culpa qui nostrud nulla eu ex officia elit ipsum laboris fugiat nulla ex reprehenderit pariatur. Amet adipisicing eiusmod fugiat dolore mollit adipisicing esse. Voluptate et nulla pariatur minim in tempor nulla aliquip eiusmod ea sint.","spans":[]}]},{"ProcessImage":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1448932223592-d1fc686e76ea?w=900&h=500&fit=crop"},"ProcessContent":[{"type":"paragraph","text":"Dolore nisi nisi Lorem dolore dolor incididunt irure exercitation elit.","spans":[]}]},{"ProcessImage":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1493119508027-2b584f234d6c?w=900&h=500&fit=crop"},"ProcessContent":[{"type":"paragraph","text":"Minim mollit sint exercitation. Sunt pariatur incididunt do sit irure enim eu adipisicing excepteur in anim aute do do consectetur. Sit mollit anim sint aute nostrud veniam aute commodo culpa laborum nisi.","spans":[]}]}],"primary":{"title":[{"type":"heading2","text":"Visualize transparent initiatives","spans":[]}]},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
