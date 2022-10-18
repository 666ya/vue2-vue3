effect1: obj.show ? 'hello' : obj.text
effect2: obj.show？ obj.text ； 'hello'

effect1:
    obj:
        show:
            track:
                new Set(effect1).n=0.w=0
            trackEffect:
                deps = [new Set(effect1).n=1.w=0]
finally:
    deps = [new Set(effect1).n=0.w=0]

effect2:
    obj:
        show:
            track:
               已存在
            trackEffect:
                deps = [new Set(effect1,effect2).n=1.w=0]
        text:
            track:
                new Set(effect2).n=0.w=0
            trackEffect:
                deps = [new Set(effect1,effect2).n=1.w=0,new Set(effect2).n=1.w=0]
finally:
deps = [new Set(effect1,effect2).n=0.w=0,new Set(effect2).n=0.w=0]

obj.show改变

effect1: deps = [new Set(effect1).n=0.w=0]
init:
    deps = [new Set(effect1).n=0.w=1]
    obj:
        show:
            track；
                已存在
            trackEffect:
                deps = [new Set(effect1).n=1.w=1]
                不收集
        text:
            track:
                new Set(effect1).n=0.w=0
            trackEffect:
                deps = [[new Set(effect1).n=1.w=1,new Set(effect1).n=0.w=0]
finally
deps = [[new Set(effect1).n=0.w=0,new Set(effect1).n=0.w=0]



effect2: deps = [new Set(effect1,effect2).n=0.w=0,new Set(effect2).n=0.w=0]
init:
deps = [new Set(effect1,effect2).n=0.w=1,new Set(effect2).n=0.w=1]
    obj:
        show:
            track
                已存在
            trackEffect:
                deps = [new Set(effect1,effect2).n=1.w=1,new Set(effect2).n=0.w=1]
                不收集
        text:
           不依赖
finally
if(w=1 && n!=0)
deps =  [new Set(effect1,effect2).n=1.w=1,new Set(effect2).n=0.w=1]









obj:
    show => new Set().n=0;.w=0 => effect1,effect2
    text => new Set().n=0;,w=0 => effect2


obj:
    show => new Set().n=0;.w=0 => effect1,effect2
    text => new Set().n=0;,w=0 => effect2


