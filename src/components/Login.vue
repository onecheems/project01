<!-- <template>
  <div>登录页</div>
  用户id<el-input v-model="userId"></el-input>
  <el-button @click="login">登录</el-button>
</template>
<script>
import {useRouter
} from 'vue-router'
import {ref} from 'vue'
export default {
  name: 'LoginComp',
  setup() {
    const router = useRouter()
    function login() {
      // 跳转到首页
      router.push({name: 'home', query: {
        userId: userId.value || ''
      }})
    }
    const userId = ref('')

    return {
      login,userId
    }
  }
}
</script> -->
<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { http } from '@/http/axios.js'
import { ElMessage } from 'element-plus'
export default {
    name: 'LoginComp',
    setup() {
        const formLogin = ref({ username: "", password: "" })
        const router = useRouter()
        const ErrorMessage = () => {
            ElMessage.error('用户名或密码错误')
        }
        async function login() {
            //模拟后端请求
            const { data: res } = await http.post('/login', null, {
                params: {
                    username: formLogin.value.username,
                    password: formLogin.value.password
                }
            })
            if (res.info === "ok") {
                router.push({
                    name: 'home', query: {
                        userId: formLogin.value.username || ''
                    }
                })
            }
            else {
                ErrorMessage()
            }

        }
        return {
            formLogin,
            login
        }
    }
}
</script>



<template>
    <div class="div1">
        <div class="divleft">
            <img src="../../public/1.png">
        </div>

        <div class="divright">
            <div class="div3"> Welcome to ASS System
                <div class="div4">
                    <div class="div4-left">Register your account</div>
                    <div class="div4-right">Sign in</div>
                </div>
            </div>

            <el-form size="large" label-width="60px" label-position="left">
                <el-form-item class="div3" label="Email">
                    <el-input v-model="formLogin.username" placeholder="qhxolnj@gaml.com" />
                </el-form-item>
                <el-form-item class="div3" label="Password">
                    <el-input v-model="formLogin.password" type="Password" :show-password="true" placeholder="123456789" />
                </el-form-item>
                <el-button color="#4966DF" @click="login">Sign in</el-button>
            </el-form>
        </div>
    </div>
</template>

<style>
img {
    height: 500px;
}

button {
    width: 100%;
    margin-top: 40px;
}

.div1 {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
}

.divleft {
    display: flex;
    flex-direction: column;
    padding-left: 30px;
    padding-right: 40px;
}

.divright {
    display: flex;
    flex-direction: column;
    padding-left: 30px;
    padding-right: 40px;
}

.div3 {
    width: 400px;
    height: 80px;
    font-size: 33px;
    font-weight: 400;
    color: rgba(73, 102, 223, 1);
    flex-direction: column;
}

.div4 {
    display: flex;
    width: 180px;
    justify-content: space-between;
    padding-top: 8px;
    font-size: 10px;
}

.div4-left {
    color: rgba(176, 183, 208, 1);
}

.div4-right {
    color: rgba(63, 102, 255, 1);
}
</style>
  