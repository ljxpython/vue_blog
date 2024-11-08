---
order: 1
category:
  -  编程
tag:
  - 前端
  - TS


isOriginal: true
disableCopy: true
date: 2024-03-04 16:17:00

permalink: /programSummary/promise使用.html
---

# Promise 使用



参考视频:[https://www.bilibili.com/video/BV1454y1R7vj/?spm_id_from=333.337.search-card.all.click&vd_source=06f814e4ba93cc08042f2aa48651e706](https://www.bilibili.com/video/BV1454y1R7vj/?spm_id_from=333.337.search-card.all.click&vd_source=06f814e4ba93cc08042f2aa48651e706)



promise 管理异步操作,像同步一样

# 基本语法![](https://cdn.nlark.com/yuque/0/2024/png/29017308/1726475626163-0bc1affc-6339-4c24-a1cf-0e30fddee658.png)
代码:

![](https://cdn.nlark.com/yuque/0/2024/png/29017308/1726475751662-d135c416-127a-40eb-866f-62992c603bd3.png)

结果:

![](https://cdn.nlark.com/yuque/0/2024/png/29017308/1726475734681-4dc6e4e8-a60b-443d-a271-040d16c03113.png)

# 状态
![](https://cdn.nlark.com/yuque/0/2024/png/29017308/1726475844700-4eca6c0b-d278-4f92-9896-b55399e5e923.png)

![](https://cdn.nlark.com/yuque/0/2024/png/29017308/1726476060201-a399beb8-c68d-438f-b920-bbd9688ecaf9.png)

![](https://cdn.nlark.com/yuque/0/2024/png/29017308/1726475957086-a513a684-63a9-407e-ba84-579798567f44.png)



![](https://cdn.nlark.com/yuque/0/2024/png/29017308/1726475935683-e73db83a-17fd-42b3-b5c7-88869d732888.png)



# 结果
![](https://cdn.nlark.com/yuque/0/2024/png/29017308/1726476223808-dc00b925-3290-4054-906e-67b0136bc978.png)

# then方法
![](https://cdn.nlark.com/yuque/0/2024/png/29017308/1726476522550-e181f514-ad1f-4044-ad5d-4c50a7913c48.png)



![](https://cdn.nlark.com/yuque/0/2024/png/29017308/1726476582744-4645e300-8911-42cd-ac22-34ed5f7d9bd1.png)



![](https://cdn.nlark.com/yuque/0/2024/png/29017308/1726476772116-d47cc2b3-67a2-44e7-abe7-1ad6459bb1d4.png)

![](https://cdn.nlark.com/yuque/0/2024/png/29017308/1726476945393-4182cc2d-f013-48ed-876c-08a7f662f43f.png)

![](https://cdn.nlark.com/yuque/0/2024/png/29017308/1726476743612-860faaaa-f521-4374-8bf4-036d5e8c0f3c.png)



# then返回的结果
![](https://cdn.nlark.com/yuque/0/2024/png/29017308/1726477198780-2dfc9a19-e399-4460-ae50-60af6fe7ba6e.png)





# promise的状态补充
![](https://cdn.nlark.com/yuque/0/2024/png/29017308/1726477708629-6a7397ff-b609-453e-94d0-df064ac67854.png)

![](https://cdn.nlark.com/yuque/0/2024/png/29017308/1726477744045-ffcc313a-0a89-495c-96dd-76d162822310.png)



使用return来完成promise的状态

![](https://cdn.nlark.com/yuque/0/2024/png/29017308/1726477564363-beafbbcb-e6e2-4590-8745-66a7a4258d61.png)

上面的代码是一段代码的简写

![](https://cdn.nlark.com/yuque/0/2024/png/29017308/1726477531752-42b8e17b-618e-460d-9df2-f37e48088d3c.png)

修改状态 

![](https://cdn.nlark.com/yuque/0/2024/png/29017308/1726477892514-20a8f490-d3b1-4a8c-b6da-e706b711ccc3.png)



![](https://cdn.nlark.com/yuque/0/2024/png/29017308/1726477828697-d21340a2-7515-4593-9f83-df7ba38ab354.png)

代码捕获异常



# catch方法
![](https://cdn.nlark.com/yuque/0/2024/png/29017308/1726478076099-b86d4be0-4add-4662-a91e-3081e6eb7ab0.png)



# promise最常见的写法
![](https://cdn.nlark.com/yuque/0/2024/png/29017308/1726478198253-9a22ecdd-f765-4ed1-bfce-1e1ee4aa4773.png)



# 实践代码
![](https://cdn.nlark.com/yuque/0/2024/png/29017308/1726478728654-e821298f-148d-48b4-873d-c922a0d61f65.png)

![](https://cdn.nlark.com/yuque/0/2024/png/29017308/1726478703466-b445a9d7-57a1-46bb-9ae7-b790ef310884.png)

