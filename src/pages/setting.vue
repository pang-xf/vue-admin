<template>
<div class="page-body">
  <div class="page-header">
    <h1 class="page-title">设置</h1>
    <el-breadcrumb>
      <el-breadcrumb-item :to="{path: '/'}">首页</el-breadcrumb-item>
      <el-breadcrumb-item >管理员信息修改</el-breadcrumb-item>
    </el-breadcrumb>
  </div>

  <div class="box">
    <div class="settingWrap">
       <div v-for="(item,index) in user" :key="index">
          <p class="title">个人资料</p>
          <div class="msg">
            <div class="avtar">
              <span class="leftText">头像:</span>
              <img src="../assets/user.jpg" alt="" v-show="!changeAvtar">
              <input type="text" name="" v-show="changeAvtar">
              <span class="tips" v-show="!changeAvtar">仅支持外链图片,请输入有效的外链图片地址</span>
              <span class="change" @click="changeNickAvtar">
                <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgd2lkdGg9IjE2cHgiIGhlaWdodD0iMTZweCIgdmlld0JveD0iMCAwIDE2IDE2IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IHNrZXRjaHRvb2wgMy43LjIgKDI4Mjc2KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5pY29uX2VkaXQ8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIHNrZXRjaHRvb2wuPC9kZXNjPgogICAgPGRlZnM+PC9kZWZzPgogICAgPGcgaWQ9IueKtuaAgSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9Iui0puaIt+iuvue9rl/plJnor6/mj5DnpLoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC05NDguMDAwMDAwLCAtNTk3LjAwMDAwMCkiPgogICAgICAgICAgICA8ZyBpZD0iR3JvdXAtMiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoOTQ4LjAwMDAwMCwgNTk3LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPHJlY3QgaWQ9IlJlY3RhbmdsZS0yMTEiIGZpbGwtb3BhY2l0eT0iMCIgZmlsbD0iI0Q4RDhEOCIgeD0iMCIgeT0iMCIgd2lkdGg9IjE2IiBoZWlnaHQ9IjE2Ij48L3JlY3Q+CiAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTMuODAxODczNiwzLjcxNDAzODQzIEwxMi4yNzcxMDkxLDIuMTk3MDY2MTUgQzEyLjAxMzAwNDYsMS45MzQzMTEyOCAxMS42MDQ4MTk3LDEuOTM0MzExMjggMTEuMzQwNjUxMiwyLjE5NzA2NjE1IEwxMC4xNDAwODg3LDMuMzkxNTU2OSBMMTIuNjczMzUxMyw1LjkxMTg3MzQyIEwxMy44MDE4NzM2LDQuNjQ1NzEwNjYgQzE0LjA2NjA0MjEsNC4zODI4OTIxNCAxNC4wNjYwNDIxLDMuOTc2ODU2OTYgMTMuODAxODczNiwzLjcxNDAzODQzIEwxMy44MDE4NzM2LDMuNzE0MDM4NDMgWiBNMiwxMS40MTgzMTA3IEwyLDEzLjkzODYyNzMgTDQuNTMzMzI2NTIsMTMuOTM4NjI3MyBMMTEuODY4OTI0Myw2LjU2ODc2MDU3IEw5LjMzNTY2MTc0LDQuMDQ4NDY1MjkgTDIsMTEuNDE4MzEwNyBMMiwxMS40MTgzMTA3IFogTTcuMzYwOTc2OTIsMTIuNjY3ODgxNiBDNi45OTA4NTk0NywxMi42Njc4ODE2IDYuNjkwODQxNDcsMTIuOTY2MzY2NCA2LjY5MDg0MTQ3LDEzLjMzNDU5MjQgQzYuNjkwODQxNDcsMTMuNzAyODE4NCA2Ljk5MDg1OTQ3LDE0LjAwMTMwMzIgNy4zNjA5NzY5MiwxNC4wMDEzMDMyIEM3LjczMTA5NDM3LDE0LjAwMTMwMzIgOC4wMzExMTIzNywxMy43MDI4MTg0IDguMDMxMTEyMzcsMTMuMzM0NTkyNCBDOC4wMzExMTIzNywxMi45NjYzNjY0IDcuNzMxMDk0MzcsMTIuNjY3ODgxNiA3LjM2MDk3NjkyLDEyLjY2Nzg4MTYgTDcuMzYwOTc2OTIsMTIuNjY3ODgxNiBaIE0xMC4wNDE1MTg3LDEyLjY2Nzg4MTYgQzkuNjcxNDAxMjYsMTIuNjY3ODgxNiA5LjM3MTM4MzI1LDEyLjk2NjM2NjQgOS4zNzEzODMyNSwxMy4zMzQ1OTI0IEM5LjM3MTM4MzI1LDEzLjcwMjgxODQgOS42NzE0MDEyNiwxNC4wMDEzMDMyIDEwLjA0MTUxODcsMTQuMDAxMzAzMiBDMTAuNDExNjM2MiwxNC4wMDEzMDMyIDEwLjcxMTY1NDIsMTMuNzAyODE4NCAxMC43MTE2NTQyLDEzLjMzNDU5MjQgQzEwLjcxMTY3NTUsMTIuOTY2MzY2NCAxMC40MTE2MzYyLDEyLjY2Nzg4MTYgMTAuMDQxNTE4NywxMi42Njc4ODE2IEwxMC4wNDE1MTg3LDEyLjY2Nzg4MTYgWiBNMTIuNzIyMDgxOCwxMi42Njc4ODE2IEMxMi4zNTE5NjQ0LDEyLjY2Nzg4MTYgMTIuMDUxOTQ2NCwxMi45NjYzNjY0IDEyLjA1MTk0NjQsMTMuMzM0NTkyNCBDMTIuMDUxOTQ2NCwxMy43MDI4MTg0IDEyLjM1MTk2NDQsMTQuMDAxMzAzMiAxMi43MjIwODE4LDE0LjAwMTMwMzIgQzEzLjA5MjE5OTMsMTQuMDAxMzAzMiAxMy4zOTIyMTczLDEzLjcwMjgxODQgMTMuMzkyMjE3MywxMy4zMzQ1OTI0IEMxMy4zOTIyMTczLDEyLjk2NjM2NjQgMTMuMDkyMTk5MywxMi42Njc4ODE2IDEyLjcyMjA4MTgsMTIuNjY3ODgxNiBMMTIuNzIyMDgxOCwxMi42Njc4ODE2IFoiIGlkPSJTaGFwZS1Db3B5LTYiIGZpbGw9IiMwMDdGRkYiPjwvcGF0aD4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+" alt=""> 修改
              </span>
            </div>
            <div class="clear"></div>
            <p>
              <span class="leftText">昵称:</span>
              <span v-show="!changeNick">{{item.name}}</span>
              <input type="text" name="" v-show="changeNick" v-model="user[0].name">
              <span class="change" @click="changeNickName">
                <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgd2lkdGg9IjE2cHgiIGhlaWdodD0iMTZweCIgdmlld0JveD0iMCAwIDE2IDE2IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IHNrZXRjaHRvb2wgMy43LjIgKDI4Mjc2KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5pY29uX2VkaXQ8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIHNrZXRjaHRvb2wuPC9kZXNjPgogICAgPGRlZnM+PC9kZWZzPgogICAgPGcgaWQ9IueKtuaAgSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9Iui0puaIt+iuvue9rl/plJnor6/mj5DnpLoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC05NDguMDAwMDAwLCAtNTk3LjAwMDAwMCkiPgogICAgICAgICAgICA8ZyBpZD0iR3JvdXAtMiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoOTQ4LjAwMDAwMCwgNTk3LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPHJlY3QgaWQ9IlJlY3RhbmdsZS0yMTEiIGZpbGwtb3BhY2l0eT0iMCIgZmlsbD0iI0Q4RDhEOCIgeD0iMCIgeT0iMCIgd2lkdGg9IjE2IiBoZWlnaHQ9IjE2Ij48L3JlY3Q+CiAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTMuODAxODczNiwzLjcxNDAzODQzIEwxMi4yNzcxMDkxLDIuMTk3MDY2MTUgQzEyLjAxMzAwNDYsMS45MzQzMTEyOCAxMS42MDQ4MTk3LDEuOTM0MzExMjggMTEuMzQwNjUxMiwyLjE5NzA2NjE1IEwxMC4xNDAwODg3LDMuMzkxNTU2OSBMMTIuNjczMzUxMyw1LjkxMTg3MzQyIEwxMy44MDE4NzM2LDQuNjQ1NzEwNjYgQzE0LjA2NjA0MjEsNC4zODI4OTIxNCAxNC4wNjYwNDIxLDMuOTc2ODU2OTYgMTMuODAxODczNiwzLjcxNDAzODQzIEwxMy44MDE4NzM2LDMuNzE0MDM4NDMgWiBNMiwxMS40MTgzMTA3IEwyLDEzLjkzODYyNzMgTDQuNTMzMzI2NTIsMTMuOTM4NjI3MyBMMTEuODY4OTI0Myw2LjU2ODc2MDU3IEw5LjMzNTY2MTc0LDQuMDQ4NDY1MjkgTDIsMTEuNDE4MzEwNyBMMiwxMS40MTgzMTA3IFogTTcuMzYwOTc2OTIsMTIuNjY3ODgxNiBDNi45OTA4NTk0NywxMi42Njc4ODE2IDYuNjkwODQxNDcsMTIuOTY2MzY2NCA2LjY5MDg0MTQ3LDEzLjMzNDU5MjQgQzYuNjkwODQxNDcsMTMuNzAyODE4NCA2Ljk5MDg1OTQ3LDE0LjAwMTMwMzIgNy4zNjA5NzY5MiwxNC4wMDEzMDMyIEM3LjczMTA5NDM3LDE0LjAwMTMwMzIgOC4wMzExMTIzNywxMy43MDI4MTg0IDguMDMxMTEyMzcsMTMuMzM0NTkyNCBDOC4wMzExMTIzNywxMi45NjYzNjY0IDcuNzMxMDk0MzcsMTIuNjY3ODgxNiA3LjM2MDk3NjkyLDEyLjY2Nzg4MTYgTDcuMzYwOTc2OTIsMTIuNjY3ODgxNiBaIE0xMC4wNDE1MTg3LDEyLjY2Nzg4MTYgQzkuNjcxNDAxMjYsMTIuNjY3ODgxNiA5LjM3MTM4MzI1LDEyLjk2NjM2NjQgOS4zNzEzODMyNSwxMy4zMzQ1OTI0IEM5LjM3MTM4MzI1LDEzLjcwMjgxODQgOS42NzE0MDEyNiwxNC4wMDEzMDMyIDEwLjA0MTUxODcsMTQuMDAxMzAzMiBDMTAuNDExNjM2MiwxNC4wMDEzMDMyIDEwLjcxMTY1NDIsMTMuNzAyODE4NCAxMC43MTE2NTQyLDEzLjMzNDU5MjQgQzEwLjcxMTY3NTUsMTIuOTY2MzY2NCAxMC40MTE2MzYyLDEyLjY2Nzg4MTYgMTAuMDQxNTE4NywxMi42Njc4ODE2IEwxMC4wNDE1MTg3LDEyLjY2Nzg4MTYgWiBNMTIuNzIyMDgxOCwxMi42Njc4ODE2IEMxMi4zNTE5NjQ0LDEyLjY2Nzg4MTYgMTIuMDUxOTQ2NCwxMi45NjYzNjY0IDEyLjA1MTk0NjQsMTMuMzM0NTkyNCBDMTIuMDUxOTQ2NCwxMy43MDI4MTg0IDEyLjM1MTk2NDQsMTQuMDAxMzAzMiAxMi43MjIwODE4LDE0LjAwMTMwMzIgQzEzLjA5MjE5OTMsMTQuMDAxMzAzMiAxMy4zOTIyMTczLDEzLjcwMjgxODQgMTMuMzkyMjE3MywxMy4zMzQ1OTI0IEMxMy4zOTIyMTczLDEyLjk2NjM2NjQgMTMuMDkyMTk5MywxMi42Njc4ODE2IDEyLjcyMjA4MTgsMTIuNjY3ODgxNiBMMTIuNzIyMDgxOCwxMi42Njc4ODE2IFoiIGlkPSJTaGFwZS1Db3B5LTYiIGZpbGw9IiMwMDdGRkYiPjwvcGF0aD4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+" alt=""> 修改
              </span>
            </p>
            <div class="divSex"><span class="leftText">性别:</span>
              <span v-show="!changeSex">{{item.sex}}</span>
              <div v-show="changeSex" class="sex">
                <el-radio v-model="radio" label="1" @change='checkSex(1)'>男</el-radio>
                <el-radio v-model="radio" label="2" @change='checkSex(2)'>女</el-radio>
              </div>
              <!-- <input type="text" name="" v-show="changeSex"> -->
              <span class="change" @click="changeNickSex">
                <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgd2lkdGg9IjE2cHgiIGhlaWdodD0iMTZweCIgdmlld0JveD0iMCAwIDE2IDE2IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IHNrZXRjaHRvb2wgMy43LjIgKDI4Mjc2KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5pY29uX2VkaXQ8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIHNrZXRjaHRvb2wuPC9kZXNjPgogICAgPGRlZnM+PC9kZWZzPgogICAgPGcgaWQ9IueKtuaAgSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9Iui0puaIt+iuvue9rl/plJnor6/mj5DnpLoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC05NDguMDAwMDAwLCAtNTk3LjAwMDAwMCkiPgogICAgICAgICAgICA8ZyBpZD0iR3JvdXAtMiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoOTQ4LjAwMDAwMCwgNTk3LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPHJlY3QgaWQ9IlJlY3RhbmdsZS0yMTEiIGZpbGwtb3BhY2l0eT0iMCIgZmlsbD0iI0Q4RDhEOCIgeD0iMCIgeT0iMCIgd2lkdGg9IjE2IiBoZWlnaHQ9IjE2Ij48L3JlY3Q+CiAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTMuODAxODczNiwzLjcxNDAzODQzIEwxMi4yNzcxMDkxLDIuMTk3MDY2MTUgQzEyLjAxMzAwNDYsMS45MzQzMTEyOCAxMS42MDQ4MTk3LDEuOTM0MzExMjggMTEuMzQwNjUxMiwyLjE5NzA2NjE1IEwxMC4xNDAwODg3LDMuMzkxNTU2OSBMMTIuNjczMzUxMyw1LjkxMTg3MzQyIEwxMy44MDE4NzM2LDQuNjQ1NzEwNjYgQzE0LjA2NjA0MjEsNC4zODI4OTIxNCAxNC4wNjYwNDIxLDMuOTc2ODU2OTYgMTMuODAxODczNiwzLjcxNDAzODQzIEwxMy44MDE4NzM2LDMuNzE0MDM4NDMgWiBNMiwxMS40MTgzMTA3IEwyLDEzLjkzODYyNzMgTDQuNTMzMzI2NTIsMTMuOTM4NjI3MyBMMTEuODY4OTI0Myw2LjU2ODc2MDU3IEw5LjMzNTY2MTc0LDQuMDQ4NDY1MjkgTDIsMTEuNDE4MzEwNyBMMiwxMS40MTgzMTA3IFogTTcuMzYwOTc2OTIsMTIuNjY3ODgxNiBDNi45OTA4NTk0NywxMi42Njc4ODE2IDYuNjkwODQxNDcsMTIuOTY2MzY2NCA2LjY5MDg0MTQ3LDEzLjMzNDU5MjQgQzYuNjkwODQxNDcsMTMuNzAyODE4NCA2Ljk5MDg1OTQ3LDE0LjAwMTMwMzIgNy4zNjA5NzY5MiwxNC4wMDEzMDMyIEM3LjczMTA5NDM3LDE0LjAwMTMwMzIgOC4wMzExMTIzNywxMy43MDI4MTg0IDguMDMxMTEyMzcsMTMuMzM0NTkyNCBDOC4wMzExMTIzNywxMi45NjYzNjY0IDcuNzMxMDk0MzcsMTIuNjY3ODgxNiA3LjM2MDk3NjkyLDEyLjY2Nzg4MTYgTDcuMzYwOTc2OTIsMTIuNjY3ODgxNiBaIE0xMC4wNDE1MTg3LDEyLjY2Nzg4MTYgQzkuNjcxNDAxMjYsMTIuNjY3ODgxNiA5LjM3MTM4MzI1LDEyLjk2NjM2NjQgOS4zNzEzODMyNSwxMy4zMzQ1OTI0IEM5LjM3MTM4MzI1LDEzLjcwMjgxODQgOS42NzE0MDEyNiwxNC4wMDEzMDMyIDEwLjA0MTUxODcsMTQuMDAxMzAzMiBDMTAuNDExNjM2MiwxNC4wMDEzMDMyIDEwLjcxMTY1NDIsMTMuNzAyODE4NCAxMC43MTE2NTQyLDEzLjMzNDU5MjQgQzEwLjcxMTY3NTUsMTIuOTY2MzY2NCAxMC40MTE2MzYyLDEyLjY2Nzg4MTYgMTAuMDQxNTE4NywxMi42Njc4ODE2IEwxMC4wNDE1MTg3LDEyLjY2Nzg4MTYgWiBNMTIuNzIyMDgxOCwxMi42Njc4ODE2IEMxMi4zNTE5NjQ0LDEyLjY2Nzg4MTYgMTIuMDUxOTQ2NCwxMi45NjYzNjY0IDEyLjA1MTk0NjQsMTMuMzM0NTkyNCBDMTIuMDUxOTQ2NCwxMy43MDI4MTg0IDEyLjM1MTk2NDQsMTQuMDAxMzAzMiAxMi43MjIwODE4LDE0LjAwMTMwMzIgQzEzLjA5MjE5OTMsMTQuMDAxMzAzMiAxMy4zOTIyMTczLDEzLjcwMjgxODQgMTMuMzkyMjE3MywxMy4zMzQ1OTI0IEMxMy4zOTIyMTczLDEyLjk2NjM2NjQgMTMuMDkyMTk5MywxMi42Njc4ODE2IDEyLjcyMjA4MTgsMTIuNjY3ODgxNiBMMTIuNzIyMDgxOCwxMi42Njc4ODE2IFoiIGlkPSJTaGFwZS1Db3B5LTYiIGZpbGw9IiMwMDdGRkYiPjwvcGF0aD4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+" alt=""> 修改
              </span>
            </div>
            <div class="clear"></div>
            <p><span class="leftText">年龄:</span>
              <span v-show="!changeAge">{{item.age}}</span>
              <input type="text" name="" v-show="changeAge">
              <span class="change" @click="changeNickAge">
                <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgd2lkdGg9IjE2cHgiIGhlaWdodD0iMTZweCIgdmlld0JveD0iMCAwIDE2IDE2IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IHNrZXRjaHRvb2wgMy43LjIgKDI4Mjc2KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5pY29uX2VkaXQ8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIHNrZXRjaHRvb2wuPC9kZXNjPgogICAgPGRlZnM+PC9kZWZzPgogICAgPGcgaWQ9IueKtuaAgSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9Iui0puaIt+iuvue9rl/plJnor6/mj5DnpLoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC05NDguMDAwMDAwLCAtNTk3LjAwMDAwMCkiPgogICAgICAgICAgICA8ZyBpZD0iR3JvdXAtMiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoOTQ4LjAwMDAwMCwgNTk3LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPHJlY3QgaWQ9IlJlY3RhbmdsZS0yMTEiIGZpbGwtb3BhY2l0eT0iMCIgZmlsbD0iI0Q4RDhEOCIgeD0iMCIgeT0iMCIgd2lkdGg9IjE2IiBoZWlnaHQ9IjE2Ij48L3JlY3Q+CiAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTMuODAxODczNiwzLjcxNDAzODQzIEwxMi4yNzcxMDkxLDIuMTk3MDY2MTUgQzEyLjAxMzAwNDYsMS45MzQzMTEyOCAxMS42MDQ4MTk3LDEuOTM0MzExMjggMTEuMzQwNjUxMiwyLjE5NzA2NjE1IEwxMC4xNDAwODg3LDMuMzkxNTU2OSBMMTIuNjczMzUxMyw1LjkxMTg3MzQyIEwxMy44MDE4NzM2LDQuNjQ1NzEwNjYgQzE0LjA2NjA0MjEsNC4zODI4OTIxNCAxNC4wNjYwNDIxLDMuOTc2ODU2OTYgMTMuODAxODczNiwzLjcxNDAzODQzIEwxMy44MDE4NzM2LDMuNzE0MDM4NDMgWiBNMiwxMS40MTgzMTA3IEwyLDEzLjkzODYyNzMgTDQuNTMzMzI2NTIsMTMuOTM4NjI3MyBMMTEuODY4OTI0Myw2LjU2ODc2MDU3IEw5LjMzNTY2MTc0LDQuMDQ4NDY1MjkgTDIsMTEuNDE4MzEwNyBMMiwxMS40MTgzMTA3IFogTTcuMzYwOTc2OTIsMTIuNjY3ODgxNiBDNi45OTA4NTk0NywxMi42Njc4ODE2IDYuNjkwODQxNDcsMTIuOTY2MzY2NCA2LjY5MDg0MTQ3LDEzLjMzNDU5MjQgQzYuNjkwODQxNDcsMTMuNzAyODE4NCA2Ljk5MDg1OTQ3LDE0LjAwMTMwMzIgNy4zNjA5NzY5MiwxNC4wMDEzMDMyIEM3LjczMTA5NDM3LDE0LjAwMTMwMzIgOC4wMzExMTIzNywxMy43MDI4MTg0IDguMDMxMTEyMzcsMTMuMzM0NTkyNCBDOC4wMzExMTIzNywxMi45NjYzNjY0IDcuNzMxMDk0MzcsMTIuNjY3ODgxNiA3LjM2MDk3NjkyLDEyLjY2Nzg4MTYgTDcuMzYwOTc2OTIsMTIuNjY3ODgxNiBaIE0xMC4wNDE1MTg3LDEyLjY2Nzg4MTYgQzkuNjcxNDAxMjYsMTIuNjY3ODgxNiA5LjM3MTM4MzI1LDEyLjk2NjM2NjQgOS4zNzEzODMyNSwxMy4zMzQ1OTI0IEM5LjM3MTM4MzI1LDEzLjcwMjgxODQgOS42NzE0MDEyNiwxNC4wMDEzMDMyIDEwLjA0MTUxODcsMTQuMDAxMzAzMiBDMTAuNDExNjM2MiwxNC4wMDEzMDMyIDEwLjcxMTY1NDIsMTMuNzAyODE4NCAxMC43MTE2NTQyLDEzLjMzNDU5MjQgQzEwLjcxMTY3NTUsMTIuOTY2MzY2NCAxMC40MTE2MzYyLDEyLjY2Nzg4MTYgMTAuMDQxNTE4NywxMi42Njc4ODE2IEwxMC4wNDE1MTg3LDEyLjY2Nzg4MTYgWiBNMTIuNzIyMDgxOCwxMi42Njc4ODE2IEMxMi4zNTE5NjQ0LDEyLjY2Nzg4MTYgMTIuMDUxOTQ2NCwxMi45NjYzNjY0IDEyLjA1MTk0NjQsMTMuMzM0NTkyNCBDMTIuMDUxOTQ2NCwxMy43MDI4MTg0IDEyLjM1MTk2NDQsMTQuMDAxMzAzMiAxMi43MjIwODE4LDE0LjAwMTMwMzIgQzEzLjA5MjE5OTMsMTQuMDAxMzAzMiAxMy4zOTIyMTczLDEzLjcwMjgxODQgMTMuMzkyMjE3MywxMy4zMzQ1OTI0IEMxMy4zOTIyMTczLDEyLjk2NjM2NjQgMTMuMDkyMTk5MywxMi42Njc4ODE2IDEyLjcyMjA4MTgsMTIuNjY3ODgxNiBMMTIuNzIyMDgxOCwxMi42Njc4ODE2IFoiIGlkPSJTaGFwZS1Db3B5LTYiIGZpbGw9IiMwMDdGRkYiPjwvcGF0aD4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+" alt=""> 修改
              </span>
            </p>
            <p><span class="leftText">邮箱:</span>
              <span v-show="!changeEmail">{{item.email}}</span>
              <input type="text" name="" v-show="changeEmail">
              <span class="change" @click="changeNickEmail">
                <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgd2lkdGg9IjE2cHgiIGhlaWdodD0iMTZweCIgdmlld0JveD0iMCAwIDE2IDE2IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IHNrZXRjaHRvb2wgMy43LjIgKDI4Mjc2KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5pY29uX2VkaXQ8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIHNrZXRjaHRvb2wuPC9kZXNjPgogICAgPGRlZnM+PC9kZWZzPgogICAgPGcgaWQ9IueKtuaAgSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9Iui0puaIt+iuvue9rl/plJnor6/mj5DnpLoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC05NDguMDAwMDAwLCAtNTk3LjAwMDAwMCkiPgogICAgICAgICAgICA8ZyBpZD0iR3JvdXAtMiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoOTQ4LjAwMDAwMCwgNTk3LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPHJlY3QgaWQ9IlJlY3RhbmdsZS0yMTEiIGZpbGwtb3BhY2l0eT0iMCIgZmlsbD0iI0Q4RDhEOCIgeD0iMCIgeT0iMCIgd2lkdGg9IjE2IiBoZWlnaHQ9IjE2Ij48L3JlY3Q+CiAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTMuODAxODczNiwzLjcxNDAzODQzIEwxMi4yNzcxMDkxLDIuMTk3MDY2MTUgQzEyLjAxMzAwNDYsMS45MzQzMTEyOCAxMS42MDQ4MTk3LDEuOTM0MzExMjggMTEuMzQwNjUxMiwyLjE5NzA2NjE1IEwxMC4xNDAwODg3LDMuMzkxNTU2OSBMMTIuNjczMzUxMyw1LjkxMTg3MzQyIEwxMy44MDE4NzM2LDQuNjQ1NzEwNjYgQzE0LjA2NjA0MjEsNC4zODI4OTIxNCAxNC4wNjYwNDIxLDMuOTc2ODU2OTYgMTMuODAxODczNiwzLjcxNDAzODQzIEwxMy44MDE4NzM2LDMuNzE0MDM4NDMgWiBNMiwxMS40MTgzMTA3IEwyLDEzLjkzODYyNzMgTDQuNTMzMzI2NTIsMTMuOTM4NjI3MyBMMTEuODY4OTI0Myw2LjU2ODc2MDU3IEw5LjMzNTY2MTc0LDQuMDQ4NDY1MjkgTDIsMTEuNDE4MzEwNyBMMiwxMS40MTgzMTA3IFogTTcuMzYwOTc2OTIsMTIuNjY3ODgxNiBDNi45OTA4NTk0NywxMi42Njc4ODE2IDYuNjkwODQxNDcsMTIuOTY2MzY2NCA2LjY5MDg0MTQ3LDEzLjMzNDU5MjQgQzYuNjkwODQxNDcsMTMuNzAyODE4NCA2Ljk5MDg1OTQ3LDE0LjAwMTMwMzIgNy4zNjA5NzY5MiwxNC4wMDEzMDMyIEM3LjczMTA5NDM3LDE0LjAwMTMwMzIgOC4wMzExMTIzNywxMy43MDI4MTg0IDguMDMxMTEyMzcsMTMuMzM0NTkyNCBDOC4wMzExMTIzNywxMi45NjYzNjY0IDcuNzMxMDk0MzcsMTIuNjY3ODgxNiA3LjM2MDk3NjkyLDEyLjY2Nzg4MTYgTDcuMzYwOTc2OTIsMTIuNjY3ODgxNiBaIE0xMC4wNDE1MTg3LDEyLjY2Nzg4MTYgQzkuNjcxNDAxMjYsMTIuNjY3ODgxNiA5LjM3MTM4MzI1LDEyLjk2NjM2NjQgOS4zNzEzODMyNSwxMy4zMzQ1OTI0IEM5LjM3MTM4MzI1LDEzLjcwMjgxODQgOS42NzE0MDEyNiwxNC4wMDEzMDMyIDEwLjA0MTUxODcsMTQuMDAxMzAzMiBDMTAuNDExNjM2MiwxNC4wMDEzMDMyIDEwLjcxMTY1NDIsMTMuNzAyODE4NCAxMC43MTE2NTQyLDEzLjMzNDU5MjQgQzEwLjcxMTY3NTUsMTIuOTY2MzY2NCAxMC40MTE2MzYyLDEyLjY2Nzg4MTYgMTAuMDQxNTE4NywxMi42Njc4ODE2IEwxMC4wNDE1MTg3LDEyLjY2Nzg4MTYgWiBNMTIuNzIyMDgxOCwxMi42Njc4ODE2IEMxMi4zNTE5NjQ0LDEyLjY2Nzg4MTYgMTIuMDUxOTQ2NCwxMi45NjYzNjY0IDEyLjA1MTk0NjQsMTMuMzM0NTkyNCBDMTIuMDUxOTQ2NCwxMy43MDI4MTg0IDEyLjM1MTk2NDQsMTQuMDAxMzAzMiAxMi43MjIwODE4LDE0LjAwMTMwMzIgQzEzLjA5MjE5OTMsMTQuMDAxMzAzMiAxMy4zOTIyMTczLDEzLjcwMjgxODQgMTMuMzkyMjE3MywxMy4zMzQ1OTI0IEMxMy4zOTIyMTczLDEyLjk2NjM2NjQgMTMuMDkyMTk5MywxMi42Njc4ODE2IDEyLjcyMjA4MTgsMTIuNjY3ODgxNiBMMTIuNzIyMDgxOCwxMi42Njc4ODE2IFoiIGlkPSJTaGFwZS1Db3B5LTYiIGZpbGw9IiMwMDdGRkYiPjwvcGF0aD4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+" alt=""> 修改
              </span>
            </p>
            <p><span class="leftText">个人简介:</span>
              <span v-show="!changeIntro" class="introText">{{item.intro}}</span>
              <input type="text" name="" v-show="changeIntro">
              <span class="change" @click="changeNickIntro">
                <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgd2lkdGg9IjE2cHgiIGhlaWdodD0iMTZweCIgdmlld0JveD0iMCAwIDE2IDE2IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IHNrZXRjaHRvb2wgMy43LjIgKDI4Mjc2KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5pY29uX2VkaXQ8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIHNrZXRjaHRvb2wuPC9kZXNjPgogICAgPGRlZnM+PC9kZWZzPgogICAgPGcgaWQ9IueKtuaAgSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9Iui0puaIt+iuvue9rl/plJnor6/mj5DnpLoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC05NDguMDAwMDAwLCAtNTk3LjAwMDAwMCkiPgogICAgICAgICAgICA8ZyBpZD0iR3JvdXAtMiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoOTQ4LjAwMDAwMCwgNTk3LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPHJlY3QgaWQ9IlJlY3RhbmdsZS0yMTEiIGZpbGwtb3BhY2l0eT0iMCIgZmlsbD0iI0Q4RDhEOCIgeD0iMCIgeT0iMCIgd2lkdGg9IjE2IiBoZWlnaHQ9IjE2Ij48L3JlY3Q+CiAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTMuODAxODczNiwzLjcxNDAzODQzIEwxMi4yNzcxMDkxLDIuMTk3MDY2MTUgQzEyLjAxMzAwNDYsMS45MzQzMTEyOCAxMS42MDQ4MTk3LDEuOTM0MzExMjggMTEuMzQwNjUxMiwyLjE5NzA2NjE1IEwxMC4xNDAwODg3LDMuMzkxNTU2OSBMMTIuNjczMzUxMyw1LjkxMTg3MzQyIEwxMy44MDE4NzM2LDQuNjQ1NzEwNjYgQzE0LjA2NjA0MjEsNC4zODI4OTIxNCAxNC4wNjYwNDIxLDMuOTc2ODU2OTYgMTMuODAxODczNiwzLjcxNDAzODQzIEwxMy44MDE4NzM2LDMuNzE0MDM4NDMgWiBNMiwxMS40MTgzMTA3IEwyLDEzLjkzODYyNzMgTDQuNTMzMzI2NTIsMTMuOTM4NjI3MyBMMTEuODY4OTI0Myw2LjU2ODc2MDU3IEw5LjMzNTY2MTc0LDQuMDQ4NDY1MjkgTDIsMTEuNDE4MzEwNyBMMiwxMS40MTgzMTA3IFogTTcuMzYwOTc2OTIsMTIuNjY3ODgxNiBDNi45OTA4NTk0NywxMi42Njc4ODE2IDYuNjkwODQxNDcsMTIuOTY2MzY2NCA2LjY5MDg0MTQ3LDEzLjMzNDU5MjQgQzYuNjkwODQxNDcsMTMuNzAyODE4NCA2Ljk5MDg1OTQ3LDE0LjAwMTMwMzIgNy4zNjA5NzY5MiwxNC4wMDEzMDMyIEM3LjczMTA5NDM3LDE0LjAwMTMwMzIgOC4wMzExMTIzNywxMy43MDI4MTg0IDguMDMxMTEyMzcsMTMuMzM0NTkyNCBDOC4wMzExMTIzNywxMi45NjYzNjY0IDcuNzMxMDk0MzcsMTIuNjY3ODgxNiA3LjM2MDk3NjkyLDEyLjY2Nzg4MTYgTDcuMzYwOTc2OTIsMTIuNjY3ODgxNiBaIE0xMC4wNDE1MTg3LDEyLjY2Nzg4MTYgQzkuNjcxNDAxMjYsMTIuNjY3ODgxNiA5LjM3MTM4MzI1LDEyLjk2NjM2NjQgOS4zNzEzODMyNSwxMy4zMzQ1OTI0IEM5LjM3MTM4MzI1LDEzLjcwMjgxODQgOS42NzE0MDEyNiwxNC4wMDEzMDMyIDEwLjA0MTUxODcsMTQuMDAxMzAzMiBDMTAuNDExNjM2MiwxNC4wMDEzMDMyIDEwLjcxMTY1NDIsMTMuNzAyODE4NCAxMC43MTE2NTQyLDEzLjMzNDU5MjQgQzEwLjcxMTY3NTUsMTIuOTY2MzY2NCAxMC40MTE2MzYyLDEyLjY2Nzg4MTYgMTAuMDQxNTE4NywxMi42Njc4ODE2IEwxMC4wNDE1MTg3LDEyLjY2Nzg4MTYgWiBNMTIuNzIyMDgxOCwxMi42Njc4ODE2IEMxMi4zNTE5NjQ0LDEyLjY2Nzg4MTYgMTIuMDUxOTQ2NCwxMi45NjYzNjY0IDEyLjA1MTk0NjQsMTMuMzM0NTkyNCBDMTIuMDUxOTQ2NCwxMy43MDI4MTg0IDEyLjM1MTk2NDQsMTQuMDAxMzAzMiAxMi43MjIwODE4LDE0LjAwMTMwMzIgQzEzLjA5MjE5OTMsMTQuMDAxMzAzMiAxMy4zOTIyMTczLDEzLjcwMjgxODQgMTMuMzkyMjE3MywxMy4zMzQ1OTI0IEMxMy4zOTIyMTczLDEyLjk2NjM2NjQgMTMuMDkyMTk5MywxMi42Njc4ODE2IDEyLjcyMjA4MTgsMTIuNjY3ODgxNiBMMTIuNzIyMDgxOCwxMi42Njc4ODE2IFoiIGlkPSJTaGFwZS1Db3B5LTYiIGZpbGw9IiMwMDdGRkYiPjwvcGF0aD4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+" alt=""> 修改
              </span>
            </p>
          </div>
        </div>
    </div>
  </div>
</div>
</template>
<script>
import { mapGetters,mapActions  } from 'vuex'
export default {
  data(){
    return{
      form:[
        {
          user:'',
          pwd:'',
          email:'',
          name:null
        }
      ],
      user: [
        {
          name: '是李宇呀丶',
          sex: '男',
          age:'23',
          email: '335136854@qq.com',
          intro: '全都是泡沫全都是泡沫全都是泡沫全都是泡沫全都是泡沫全都是泡沫全都是泡沫~~~~'
        }
      ],
      changeAvtar:false,
      changeNick:false,
      changeSex:false,
      changeAge:false,
      changeEmail:false,
      changeIntro:false,
      radio:'1'
    }
  },
  computed:{
    ...mapGetters([
      'admin',
    ])
  },
  methods:{
    changeNickName(){
      if(!this.changeNick){
        console.log('点击修改的时候');
        console.log(this.user[0].name);
      }else{
        console.log('确认修改');
        this.$store.dispatch('editMsg',
          {
            key:'name',
            value:this.user[0].name
          }
        )
        console.log(this.user[0].name);
      }
      this.changeNick = !this.changeNick;
    },
    changeNickSex(){
      this.changeSex = !this.changeSex;
    },
    changeNickAge(){
      this.changeAge = !this.changeAge;
    },
    changeNickEmail(){
      this.changeEmail = !this.changeEmail;
    },
    changeNickIntro(){
      this.changeIntro = !this.changeIntro;
    },
    changeNickAvtar(){
      this.changeAvtar = !this.changeAvtar;
    },
    checkSex(label){
      console.log(label);
    }
  }
}
</script>

<style scoped lang="less">
  .clear{
    clear: both;
  }
  .box-body{
    width: 100%;
    overflow: auto;
  }
  .box{
    width: 40%;
    margin: 100px auto;
    border-radius: 6px;
  }
  .settingWrap{
    // height: 500px;
    padding: 0px 20px 20px 20px;
    font-size: 18px;
    p{
      height: 35px;
    }
    .divSex{
      height: 35px;
    }
    .title{
      border-bottom: 1px solid rgb(194, 192, 192);
      padding-bottom: 15px;
      font-size: 22px;
      font-weight: bold;
    }
    .leftText{
      display: block;
      float: left;
      width: 120px;
    }
    .introText{
      display: inline-block;
      width: 300px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space:nowrap;
    }
    .change{
      float: right;
      cursor: pointer;
      color:#007fff;
      font-size: 16px;
      img{
        position: relative;
        top: 1px;
      }
    }
    .sex{
      display: inline-block;
      float: left;
    }
    .avtar{
      height: 100px;
      img{
        float: left;
      }
      .tips{
        font-size: 12px;
        display: block;
        float: left;
        width: 100px;
        padding: 20px 0px 0 20px;
      }
    }
    .msg{
      letter-spacing: 1.5px;
      padding-left: 80px;
    }
  }
</style>
