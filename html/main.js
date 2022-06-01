    //Vueのインスタンスの定義
    var app = new Vue({
        el:"#app",  //vueのインスタンスが紐づくDOM要素ののセレクタ
        data:{      //ここで定義した値がv-model="hoge"や{{hoge}}の初期値に反映される
            id:"1000"
        },
        methods:{//v-on:click="hoge"などのイベントに紐づく関数定義
          post: function(){ //v-on:click="post"時の処理

            const headers = {
                'Content-Type': 'application/json'
            }
            console.log(this.id)
            const data = {id: this.id}
            axios.post('http://localhost:8888/ajax.php', data, {
                headers: headers
            })
            .then(response => {
                console.log(response.data.id);
            })
            .catch(error => {
                console.log(error);
            });
          }
        }
      })
