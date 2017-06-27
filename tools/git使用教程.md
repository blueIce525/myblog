# git使用教程

## 下载

### win7系统：

[https://git-for-windows.github.io/](https://git-for-windows.github.io/)

### mac系统

mac系统，推荐安装Apple公司的Xcode，Xcode集成了Git，最新版的Xcode已经默认安装好了git。完成安装之后，就可以在终端使用git的命令行工具。


## 安装教程

win7按照如下教程安装

[http://blog.csdn.net/fengye_yulu/article/details/52116146](http://blog.csdn.net/fengye_yulu/article/details/52116146)

根据教程，一步步安装即可


## 配置

（1）注册一个github账户。到https://github.com/ 上注册账号

（2）配置账号信息

````
git config --global user.name yourname //用户名填写你的名字
git config --global user.email youreamil@gmail.com //用户邮箱填写你的邮箱

````
（3）创建ssh key

````
cd ~/.ssh
ssh-keygen -t rsa -C "youreamil@gmail.com"

````
输入以上代码后，接下去都是回车，不用设置密码（方便操作）

（4）ssh key配置到github

````
cd ~/.ssh
cat id_rsa.pub //查看ssh key

````
拷贝ssh key后，登陆github网站，点击右上角你的头像，在弹出层中选Settings，然后选SSH keys，接下来点击右侧的Add SSH key，粘贴ssh key，即可推代码

## git生成ssh key及本地解决多个ssh key的问题

如果不同平台需要不同的email生成的ssh key,可以参考 [git生成ssh key及本地解决多个ssh key的问题](http://riny.net/2014/git-ssh-key/)，总结很详细，照着操作就可以。

如果不需要区分平台，本地生产的ssh key，分别到各个平台去Add SSH key即可。像我gitlab和github用的就是同一个ssh key通信。

## gitlab或是github上创建项目
gitlab或是github上创建项目，操作一模一样，下面举例gitlab



1、gitlab上的创建项目按钮创建项目

![https://raw.githubusercontent.com/blueIce525/myblog/master/images/git1.png](https://raw.githubusercontent.com/blueIce525/myblog/master/images/git1.png)

2、进入创建项目页面

![https://raw.githubusercontent.com/blueIce525/myblog/master/images/git2.png](https://raw.githubusercontent.com/blueIce525/myblog/master/images/git2.png)

3、填写项目信息，点击创建按钮

![https://raw.githubusercontent.com/blueIce525/myblog/master/images/git3.png](https://raw.githubusercontent.com/blueIce525/myblog/master/images/git3.png)

4、进入项目页面，有3种操作，在本地的git工具上，按照项目页面的命令操作，我们选择第一种创建，即可clone和提交项目

![https://raw.githubusercontent.com/blueIce525/myblog/master/images/git4.png](https://raw.githubusercontent.com/blueIce525/myblog/master/images/git4.png)

5、以上操作后，刷新项目页面，即可看到项目已经存在

![https://raw.githubusercontent.com/blueIce525/myblog/master/images/git5.png](https://raw.githubusercontent.com/blueIce525/myblog/master/images/git5.png)

**注意：项目要添加一个.gitignore，忽略一些文件、文件夹不提交，我常忽略的文件有**

```
node_modules/
.DS_Store
.idea/
.cache
.sass-cache
tmp/
bower_components/

```

GitHub已经为我们准备了各种配置文件，只需要组合一下就可以使用了。所有配置文件可以直接在线浏览：[https://github.com/github/gitignore](https://github.com/github/gitignore)

## git日常需求基本操作：

**对于初学者，先掌握以下常用的命令，从clone到提交到发布打tag,后续再进行使用复杂的操作会好一些**：

1、把代码clone到本地：git clone 仓库地址

2、查看分支:  git branch -a（-a代表查看所有的分支，包括远程的）

3、切换到要修改的分支: git checkout 分支名a （a分支作为本次需求的base分支）

4、在当前的分支上新建一个分支并切换到新建分支:  git checkout -b 新分支名b （ git checkout -b 新分支名b 等价于先创建个b分支然后再checkout到b分支两个步骤的合体 ）

5、查看修改过文件的状态： git status

6、修改文件后添加文件到缓存区:  git add .

7、将缓存区的文件提交到分支上:  git commit -m "提交描述信息"

8、切换到分支名a:  git checkout 分知名a （切换到base分支）

9、把远程仓库的内容pull到本地： git pull （因为其他人也可能push到base分支了，全写的命令是 git pull origin 分知名a）

10、将新分支b合并到分支a:  git merge 分支名b （将修改的分支合并到base分支）

11、将分支a推送到远程： git  push -u origin 分知名a （将修改后的base分支提交）

12、标签：git tag tag的名称（例如publish/2.0.3）

13、查看已有的标签： git tag

14、推送标签：git push origin tag的名称（例如publish/2.0.3）


## 常用命令

常用的命令如下：
### 远程仓库相关命令
git clone [url]   clone仓库,从服务器上将代码给拉下来

git remote -v  查看远程仓库

git remote add [name] [url] 添加远程仓库

git pull [remoteName] [localBranchName] 拉取远程仓库

git push [remoteName] [localBranchName]  推送远程仓库

git fetch 相当于是从远程获取最新版本到本地，不会自动merge

### 查看信息

git branch -a 查看所有的分支

git status 查看当前状态

git diff 查看尚未暂存的更新

git tag 查看tag

git log 看你commit的日志

git reflog 显示当前分支的最近几次提交


### 分支操作

git checkout -b [name]  创建新分支并立即切换到新分支

git checkout [name]  切换分支

git branch -d [name] 删除本地已经合并的分支

git branch -D [name] 强制删除本地分支，即使未合并

git push origin [name]   推送分支到远程

git push origin :[name] 删除远程分支

git merge [name] 合并某分支到当前分支

git merge --no-ff -m "commit描述" [name]  合并分支时，加上--no-ff参数就可以用普通模式合并，合并后的历史有分支，能看出来曾经做过合并

### 删除文件

git rm [filename] 不但从stage中删除，同时删除物理文件

### 提交命令

git add [file name] 添加一个文件到暂存区

git add .  将所有修改过的工作文件提交暂存区

git commit 把文件从stage提交到branch

git commit -a 把修改的文件先提交到stage,然后再从stage提交到branch

###  解决冲突

git merge [branch] 或是 git pull 产生冲突时，命令行会列出冲突的文件，手动解决冲突后再提交


### 撤销回滚

git checkout -- [file] 丢弃工作区的修改

git reset HEAD [file] 恢复暂存区的指定文件到工作区

git log 看你commit的日志

git reset --hard ［commit_id］撤销本地未提交到远程的改动

git push -f origin ［master/branch］强制提交以上的撤销

git revert HEAD  撤销最近一次的提交，撤销远程提交需要把当前代码提交一次git push origin［master/branch］

git revert [commit_id］一定会有代码冲突，需要你合并代码，合并代码只需要把当前的代码全部去掉，也就是HEAD标记的代码


### 版本(tag)操作相关命令
git tag 查看版本

git tag [name] 创建版本

git push origin [name] 创建远程版本(本地版本push到远程)

git tag -d [name] 删除版本

git push origin :refs/tags/[name] 删除远程版本

git tag -r 查看远程版本

git pull origin --tags 合并远程仓库的tag到本地

git push origin --tags 上传本地tag到远程仓库


### 其他
git stash push 将文件给push到一个临时空间中

git stash pop 将文件从临时空间pop下来


## 使用客户端的同学参考下面操作

[http://blog.csdn.net/allenjay11/article/details/51941829](http://blog.csdn.net/allenjay11/article/details/51941829)



## 附录：

[Git的官方网站](https://git-scm.com/book/zh/v1/%E8%B5%B7%E6%AD%A5)

[git教程](http://www.liaoxuefeng.com/wiki/0013739516305929606dd18361248578c67b8067c8c017b000)

[git简易指南](http://www.bootcss.com/p/git-guide/)

[常用 Git 命令清单](http://www.bootcss.com/p/git-guide/)

[Git 常用命令大全](http://blog.csdn.net/dengsilinming/article/details/8000622)







