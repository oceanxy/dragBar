
# dragBar
## 拖动选择条

点击查看 [demo](http://www.xieyangogo.cn/dragBar)

---

#### 注意事项：
* 发现bug或技术上的交流请发邮件到：[xyzsyx@163.com]()
* 本插件依赖jQuery库
* 本demo为本人早起所写，可能写法不适用于现在的框架页面，这里只是提供思路和效果

-----
#### 使用方法：

1. 导入样式表
```HTML
    <link rel="stylesheet" type="text/css" href="./styles/index.css" />
```



2. 导入jquery库文件和autoTime.js
```HTML
	<script src="http://code.jquery.com/jquery-1.9.1.min.js"></script>
    <script src="./scripts/index.js"></script>
```



3. DOM
```HTML
    <div class="drag-bar drag-bar-1" data-curVal="0">
        <span class="drag-start">0</span>
        <div class="drag-shape">
          <div class="drag-bar-process"></div>
          <div class="drag-text-process">
            <span class="drag-cur">0</span>
          </div>
        </div>
        <span class="drag-end">0</span>
      </div>
```

4. 调用 / 初始化
```javaScript
	$.dragBar({
        dragBar: ".drag-bar-1",
        width: 300,
        startVal: 100,
        endVal: 200,
        val: 100
    });
```

---

#### option

##### dragBar {string} 
    css 选择器
    例如：".drag-bar"
    
##### drag {boolean}
    是否可拖动
    
##### width {number || undefined}
    宽度 
    缺省：根据控件的内部元素结构及内部元素各自的占位大小算出的最小值
    
##### startVal {number}
    起始值
    
##### endVal {number}
    终止值
    
##### val {number}
    初始值
