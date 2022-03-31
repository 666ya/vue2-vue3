import {
    ref,
    onMounted,
    onUnmounted
} from 'vue'

export function useMouse() {
    const x = ref(0)
    const y = ref(0)

    function mouseUpdate(event) {
        x.value = event.pageX;
        y.value = event.pageY;
    }
    onMounted(() => window.addEventListener("mousemove", mouseUpdate));
    onUnmounted(() => window.removeEventListener("mousemove", mouseUpdate));
    return {
        x,
        y
    }
}