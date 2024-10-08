<script lang="ts" setup>
import YunFooter from 'valaxy-theme-yun/components/YunFooter.vue'

</script>
<template>
    <YunFooter>
        <!-- 自定义页脚内容 -->
        <VCLiveTime mt="2" start-time="2024-08-31">
            <template #live-time-before>
                <span>本站已运行</span>
            </template>
        </VCLiveTime>
    </YunFooter>
</template>