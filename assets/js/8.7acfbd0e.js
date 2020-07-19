(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{350:function(s,t,a){s.exports=a.p+"assets/img/algo-com-backtracking.e2bc72aa.jpg"},370:function(s,t,a){"use strict";a.r(t);var A=a(43),n=Object(A.a)({},(function(){var s=this,t=s.$createElement,A=s._self._c||t;return A("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[A("h1",{attrs:{id:"回溯算法"}},[A("a",{staticClass:"header-anchor",attrs:{href:"#回溯算法"}},[s._v("#")]),s._v(" 回溯算法")]),s._v(" "),A("p"),A("div",{staticClass:"table-of-contents"},[A("ul",[A("li",[A("a",{attrs:{href:"#回溯算法"}},[s._v("回溯算法")]),A("ul",[A("li",[A("a",{attrs:{href:"#概念"}},[s._v("概念")])]),A("li",[A("a",{attrs:{href:"#题目"}},[s._v("题目")]),A("ul",[A("li",[A("a",{attrs:{href:"#全排列"}},[s._v("全排列")])])])])])])])]),A("p"),s._v(" "),A("h2",{attrs:{id:"概念"}},[A("a",{staticClass:"header-anchor",attrs:{href:"#概念"}},[s._v("#")]),s._v(" 概念")]),s._v(" "),A("p",[s._v("回溯算法是一个类似枚举的搜索尝试过程，是暴力搜索法的一种。对某些问题而言，回溯法是可以找出所有解或部分解的一般性解法。在搜索过程中，逐步构建满足约束条件的候选解，当进行到某一步时候发现不满足条件，就回退至上一步或上几步来搜索其他的候选解，因此叫回溯算法。回溯算法的搜索过程类似于树形结构，每一步都是在做选择。每一步都需要选择某个元素加入候选解，直到候选解满足约束条件。 接下来通过几个经典例题介绍回溯算法的解题思路。")]),s._v(" "),A("h2",{attrs:{id:"题目"}},[A("a",{staticClass:"header-anchor",attrs:{href:"#题目"}},[s._v("#")]),s._v(" 题目")]),s._v(" "),A("h3",{attrs:{id:"全排列"}},[A("a",{staticClass:"header-anchor",attrs:{href:"#全排列"}},[s._v("#")]),s._v(" 全排列")]),s._v(" "),A("p",[s._v("力扣第46题 "),A("a",{attrs:{href:"https://leetcode-cn.com/problems/permutations/",target:"_blank",rel:"noopener noreferrer"}},[s._v("46.全排列"),A("OutboundLink")],1)]),s._v(" "),A("p",[s._v("给定一个 没有重复 数字的序列，返回其所有可能的全排列。")]),s._v(" "),A("p",[A("code",[s._v("输入: [1,2,3] 输出: [ [1,2,3], [1,3,2], [2,1,3], [2,3,1], [3,1,2], [3,2,1] ]")])]),s._v(" "),A("p",[s._v("思路：")]),s._v(" "),A("p",[s._v("计算所有可能的全排列，显然这需要枚举所有可能的组合。我们需要一个递归的搜索的过程，来枚举所有可能的组合。考虑有一个候选数组，每次我们从这个候选数组中挑选元素加入候选解，同时我们需要一个标记数组来表示某个元素是否已经加入候选解。当候选解满足满足条件时，返回该候选解。同时回溯至上一步，选择其他候选解。所谓回溯就是指恢复至上一步的状态。")]),s._v(" "),A("p",[A("img",{staticStyle:{"min-width":"100px","min-height":"100px",background:"url(data:image/gif;base64,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) no-repeat center","background-size":"30px 30px"},attrs:{src:a(350),alt:"搜索过程",loading:"lazy"}})]),s._v(" "),A("p",[s._v("上图是搜索排列的全过程，候选表示待选择的数组，标识数组和待选择数组大小相同，0表示该元素未选，1表示该元素已选，已选表示已经选择的元素，也就是候选解。 橘黄色箭头表示不断搜索加入候选元素，绿色箭头表示回溯，恢复至上一步的状态，序号是执行的顺序。")]),s._v(" "),A("p",[A("strong",[s._v("候选元素")]),s._v("： nums数组")]),s._v(" "),A("p",[A("strong",[s._v("递归终止条件")]),s._v("：候选元素全部放入已选列表。")]),s._v(" "),A("p",[s._v("由此我们可以写出全排列的代码：")]),s._v(" "),A("div",{staticClass:"language-java line-numbers-mode"},[A("pre",{pre:!0,attrs:{class:"language-java"}},[A("code",[A("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),A("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Solution")]),s._v(" "),A("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    \n    "),A("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("List")]),A("span",{pre:!0,attrs:{class:"token generics"}},[A("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),A("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("List")]),A("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),A("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Integer")]),A("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")]),A("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v(" res "),A("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),A("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),A("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ArrayList")]),A("span",{pre:!0,attrs:{class:"token generics"}},[A("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),A("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),A("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),A("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),A("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    "),A("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),A("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("List")]),A("span",{pre:!0,attrs:{class:"token generics"}},[A("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),A("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("List")]),A("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),A("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Integer")]),A("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")]),A("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v(" "),A("span",{pre:!0,attrs:{class:"token function"}},[s._v("permute")]),A("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),A("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),A("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),A("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" nums"),A("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),A("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),A("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),A("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),A("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" flag "),A("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),A("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),A("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),A("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("nums"),A("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("length"),A("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),A("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),A("span",{pre:!0,attrs:{class:"token function"}},[s._v("backtracking")]),A("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("nums"),A("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" flag"),A("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),A("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),A("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ArrayList")]),A("span",{pre:!0,attrs:{class:"token generics"}},[A("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),A("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Integer")]),A("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),A("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),A("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),A("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),A("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),A("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" res"),A("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),A("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n    "),A("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// nums是候选数组，flag是标识数组, list是已选列表")]),s._v("\n    "),A("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),A("span",{pre:!0,attrs:{class:"token function"}},[s._v("backtracking")]),A("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),A("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),A("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),A("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" nums"),A("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),A("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),A("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),A("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" flag"),A("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),A("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("List")]),A("span",{pre:!0,attrs:{class:"token generics"}},[A("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),A("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Integer")]),A("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v(" list"),A("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),A("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),A("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 递归终止条件")]),s._v("\n        "),A("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 当已选列表元素个数和候选相同时，本轮搜索结束 list.size() == nums.length")]),s._v("\n        "),A("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),A("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("list"),A("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),A("span",{pre:!0,attrs:{class:"token function"}},[s._v("size")]),A("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),A("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),A("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" nums"),A("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("length"),A("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),A("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            res"),A("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),A("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),A("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),A("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),A("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ArrayList")]),A("span",{pre:!0,attrs:{class:"token generics"}},[A("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),A("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),A("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("list"),A("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),A("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),A("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            "),A("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),A("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),A("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),A("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),A("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),A("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" i "),A("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),A("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),A("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" i "),A("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" nums"),A("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("length"),A("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" i"),A("span",{pre:!0,attrs:{class:"token operator"}},[s._v("++")]),A("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),A("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),A("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 剪枝，判断当前元素是否加入已选列表")]),s._v("\n            "),A("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),A("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("flag"),A("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("i"),A("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),A("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),A("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),A("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),A("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                "),A("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("continue")]),A("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            "),A("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n            "),A("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 添加元素到已选列表")]),s._v("\n            list"),A("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),A("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),A("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("nums"),A("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("i"),A("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),A("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),A("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            "),A("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 将该位置元素的标识为已选")]),s._v("\n            flag"),A("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("i"),A("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),A("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),A("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),A("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            "),A("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 向下继续搜索")]),s._v("\n            "),A("span",{pre:!0,attrs:{class:"token function"}},[s._v("backtracking")]),A("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("nums"),A("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" flag"),A("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" list"),A("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),A("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            "),A("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//回溯，恢复至上一状态")]),s._v("\n            list"),A("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),A("span",{pre:!0,attrs:{class:"token function"}},[s._v("remove")]),A("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("list"),A("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),A("span",{pre:!0,attrs:{class:"token function"}},[s._v("size")]),A("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),A("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),A("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" "),A("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),A("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),A("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            flag"),A("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("i"),A("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),A("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),A("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),A("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),A("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),A("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),A("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n")])]),s._v(" "),A("div",{staticClass:"line-numbers-wrapper"},[A("span",{staticClass:"line-number"},[s._v("1")]),A("br"),A("span",{staticClass:"line-number"},[s._v("2")]),A("br"),A("span",{staticClass:"line-number"},[s._v("3")]),A("br"),A("span",{staticClass:"line-number"},[s._v("4")]),A("br"),A("span",{staticClass:"line-number"},[s._v("5")]),A("br"),A("span",{staticClass:"line-number"},[s._v("6")]),A("br"),A("span",{staticClass:"line-number"},[s._v("7")]),A("br"),A("span",{staticClass:"line-number"},[s._v("8")]),A("br"),A("span",{staticClass:"line-number"},[s._v("9")]),A("br"),A("span",{staticClass:"line-number"},[s._v("10")]),A("br"),A("span",{staticClass:"line-number"},[s._v("11")]),A("br"),A("span",{staticClass:"line-number"},[s._v("12")]),A("br"),A("span",{staticClass:"line-number"},[s._v("13")]),A("br"),A("span",{staticClass:"line-number"},[s._v("14")]),A("br"),A("span",{staticClass:"line-number"},[s._v("15")]),A("br"),A("span",{staticClass:"line-number"},[s._v("16")]),A("br"),A("span",{staticClass:"line-number"},[s._v("17")]),A("br"),A("span",{staticClass:"line-number"},[s._v("18")]),A("br"),A("span",{staticClass:"line-number"},[s._v("19")]),A("br"),A("span",{staticClass:"line-number"},[s._v("20")]),A("br"),A("span",{staticClass:"line-number"},[s._v("21")]),A("br"),A("span",{staticClass:"line-number"},[s._v("22")]),A("br"),A("span",{staticClass:"line-number"},[s._v("23")]),A("br"),A("span",{staticClass:"line-number"},[s._v("24")]),A("br"),A("span",{staticClass:"line-number"},[s._v("25")]),A("br"),A("span",{staticClass:"line-number"},[s._v("26")]),A("br"),A("span",{staticClass:"line-number"},[s._v("27")]),A("br"),A("span",{staticClass:"line-number"},[s._v("28")]),A("br"),A("span",{staticClass:"line-number"},[s._v("29")]),A("br"),A("span",{staticClass:"line-number"},[s._v("30")]),A("br"),A("span",{staticClass:"line-number"},[s._v("31")]),A("br"),A("span",{staticClass:"line-number"},[s._v("32")]),A("br"),A("span",{staticClass:"line-number"},[s._v("33")]),A("br"),A("span",{staticClass:"line-number"},[s._v("34")]),A("br"),A("span",{staticClass:"line-number"},[s._v("35")]),A("br"),A("span",{staticClass:"line-number"},[s._v("36")]),A("br")])])])}),[],!1,null,null,null);t.default=n.exports}}]);