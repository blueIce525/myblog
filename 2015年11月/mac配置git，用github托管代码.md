# mac配置git，用github托管代码

## 安装git

mac系统，推荐安装Ap1、ple公司的Xcode，Xcode集成了Git，最新版的Xcode已经默认安装好了git。完成安装之后，就可以在终端使用git的命令行工具。

## github配置
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

参考 [git生成ssh key及本地解决多个ssh key的问题](http://riny.net/2014/git-ssh-key/)，总结很详细，照着操作就可以。

## git日常需求基本操作：

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
参考 [Git 常用命令大全](http://blog.csdn.net/dengsilinming/article/details/8000622)，这里总结的很完整。


本人常用的命令如下：
### 远程仓库相关命令
git clone [url]   clone仓库,从服务器上将代码给拉下来

git remote -v  查看远程仓库

git remote add [name] [url] 添加远程仓库

git pull [remoteName] [localBranchName] 拉取远程仓库

git push [remoteName] [localBranchName]  推送远程仓库

### 查看信息
git status 查看当前状态

git branch -a 查看所有的分支

git tag 查看tag

### 分支操作

git checkout -b [name]  创建新分支并立即切换到新分支

git checkout [name]  切换分支

git branch -d [name] 删除本地已经合并的分支

git branch -D [name] 强制删除本地分支，即使未合并

git push origin [name]   推送分支到远程

git push origin :[name] 删除远程分支

### 删除文件

git rm [filename] 不但从stage中删除，同时删除物理文件

### 提交命令

git add [file name] 添加一个文件到暂存区

git add .  将所有修改过的工作文件提交暂存区

git commit 把文件从stage提交到branch

git commit -a 把修改的文件先提交到stage,然后再从stage提交到branch






