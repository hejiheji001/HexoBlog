title: "JS VS Hangman"
date: 2015-03-13 23:26:34
tags:
---
这两天参加了一个笔试，题目是用JS模拟一个[Hangman](http://en.wikipedia.org/wiki/Hangman_game)游戏玩家，猜测给出单词的字母构成，实现与服务器PK。

项目地址在[GitHub](https://github.com/hejiheji001/Hangman)

很显然，这是个关系到策略的问题。

作为一名<span style="text-decoration: line-through;">优秀的</span>程序员，我采用了以下步骤去完成这个任务：

---

#资料收集：

[Hangman游戏规则](http://en.wikipedia.org/wiki/Hangman_game)

[字母频率[0]](http://zh.wikipedia.org/wiki/字母频率)

[字母频率[1]](http://datagenetics.com/blog/april12012/index.html)

[特定长度单词中的字母频率](http://datagenetics.com/blog/april12012/index.html)

[决策树&贝叶斯（虽然没能采用 但受益很多）](http://mindhacks.cn/2008/09/21/the-magical-bayesian-method/)

[大神们的经验[0]](https://ruby-china.org/topics/16256)

[大神们的经验[1]](https://github.com/spydez/hangman)

[一个1.9MB的字典](https://github.com/hejiheji001/Hangman/blob/master/app/words.txt)

[一个6.5MB的字典](https://github.com/hejiheji001/Hangman/blob/master/app/dictionary.js)
 <!--more-->
---
#结合资料思考解题思路：

1.1 从服务器获取全新单词，如：******（它表示一个由6个字母组成的单词，字母可以有重复）

1.2 根据单词长度，从[特定长度单词中的字母频率]表里找到第一个字母，进行猜测

![firstChar](/images/hangman/firstChar.png)

我根据上图生成了如下代码，index用于记录位置：

``` JavaScript
//这样我就能很快的找到每次（仅当一个字母都没猜对的情况）所需的字母
charMap: {
	"1": ["A", "I"],
	"2": ["A", "O", "E", "I", "U", "M", "B", "H"],
	"3": ["A", "E", "O", "I", "U", "Y", "H", "B", "C", "K"],
	"4": ["A", "E", "O", "I", "U", "Y", "S", "B", "F"],
	"5": ["S", "E", "A", "O", "I", "U", "Y", "H"],
	"6": ["E", "A", "I", "O", "U", "S", "Y"],
	"7": ["E", "I", "A", "O", "U", "S"],
	"8": ["E", "I", "A", "O", "U"],
	"9": ["E", "I", "A", "O", "U"],
	"10": ["E", "I", "O", "A", "U"],
	"11": ["E", "I", "O", "A", "D"],
	"12": ["E", "I", "O", "A", "F"],
	"13": ["I", "E", "O", "A"],
	"14": ["I", "E", "O"],
	"15": ["I", "E", "A"],
	"16": ["I", "E", "H"],
	"17": ["I", "E", "R"],
	"18": ["I", "E", "A"],
	"19": ["I", "E", "A"],
	"20": ["I", "E"],
	index: 0
}
```

1.3通过对服务器返回的新字符串进行判断

1.3.1如果上次没有猜对（即新字符串依然全是\*号）我们就重复步骤 1.2。

1.3.2 如果返回的字符串包含了上次猜测的字母，则我们可以获得一个模版（例如\*\*A\*\*\*），并进行步骤 2.1。

2.1 将字典数据读入并去掉里面长度不等于返回字符传长度的单词。（如：去掉全部长度不等于6的单词）

2.2 对剩余进行模式匹配，再次去掉在特定位置处字母不等于上次猜对的字母的全部单词。（如：去掉全部第三个字母不是A的单词）

2.3 把余下全部单词进行统计，并得出字母出现的次数，取次数最多的字母作为下次猜测字母。

2.4 通过对服务器返回的新字符串进行判断

2.4.1 如果上次没有猜对（即新字符串和1.3.2一样）则重复步骤 2.3。

2.4.2 如果猜对了，则重复步骤2.2～2.3直到猜对为止。

>PS: 在实际测试过程中发现有时候从2.4.2跳至2.2的时候，会出现把全部单词去掉的情况，这是因为你的字典不够大导致的（当然，或许还有别的原因被我我疏漏了）

---

#写代码

写呗……

---

#测试结果：

经过若干次测试（10+），正确率可以保证95%左右，最好的一次是79/80
![result](/images/hangman/result.png)

---

#总结：

1. 当字母数量为4～5的时候，错误率显著上升（因为该区间单词众多），经前人经验证明，采取决策树方案可以比较完美的解决这个问题，而且还更加高效。

2. 我使用的是暴力穷举法，在单词数量上升的时候，明显感觉程序有卡顿，证明效率问题还是需要解决，有待优化算法。

3. 一开始拿到的是多行TXT文本，为了读取内容采用了Node搭建的静态服务器，但是后来发现更好的办法是使用JS文件导入，好办法要记下。

#写在最后：

作为一名半路出家的野生<span style="text-decoration: line-through;">优秀的</span>程序员，通过这段时间的求职经历发现没有一个充满内容的GitHub和Blog真的没法证明自己的水平。

这也应证了一句话的正确性：

>Talk is cheep, show me the code.

于是，再接再厉吧～

Be a proudly Java and Front－End engineer.



