<template>
  <div class="exercise-records">
    <div class="header">
      <div class="title-wrap">
        <h2>운동 기록</h2>
        <p class="sub">
          오늘 {{ totalMinutes }}분 운동 · {{ totalKcal }} kcal 소모
        </p>
      </div>
      <div class="header-actions">
        <button class="ghost-btn" v-if="records.length" @click="clearAll">전체 삭제</button>
        <button class="add-btn" @click="openModal">
          <img :src="plusIcon" alt="add" class="add-icon" />
          운동 추가
        </button>
      </div>
    </div>

    <div class="summary-section">
      <ExerciseSummaryCard
        :icon="blueIcon"
        label="총 운동 시간"
        :value="totalMinutes"
        unit="분"
        colorClass="blue"
      />
      <ExerciseSummaryCard
        :icon="orangeIcon"
        label="소모 칼로리"
        :value="totalKcal"
        unit="kcal"
        colorClass="orange"
      />
      <ExerciseSummaryCard
        :icon="greenIcon"
        label="운동 횟수"
        :value="totalCount"
        unit="회"
        colorClass="green"
      />
    </div>

    <ExerciseTodayList
      :records="records"
      @delete="deleteRecord"
    />

    <ExerciseRecordModal
      :visible="isModalOpen"
      @close="closeModal"
      @save="addRecord"
    />
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import { useToast } from '@/lib/toast'
import ExerciseSummaryCard from '@/components/exerciseRecords/ExerciseSummaryCard.vue'
import ExerciseTodayList from '@/components/exerciseRecords/ExerciseTodayList.vue'
import ExerciseRecordModal from '@/components/exerciseRecords/ExerciseRecordModal.vue'

import blueIcon from '@/assets/images/exerciseRecords/bruedumbel.png'
import orangeIcon from '@/assets/images/exerciseRecords/orangedumbel.png'
import greenIcon from '@/assets/images/exerciseRecords/greendumbel.png'
import plusIcon from '@/assets/images/exerciseRecords/plus.png'

const records = ref([])

// localStorage persistence by date so Calendar can show data
const STORE_KEY = 'exerciseRecordsByDate'
const toTodayKey = () => {
  const d = new Date()
  const y = d.getFullYear()
  const m = String(d.getMonth() + 1).padStart(2, '0')
  const day = String(d.getDate()).padStart(2, '0')
  return `${y}-${m}-${day}`
}
const loadMap = () => {
  try { return JSON.parse(localStorage.getItem(STORE_KEY) || '{}') } catch { return {} }
}
const saveMap = (map) => localStorage.setItem(STORE_KEY, JSON.stringify(map))

onMounted(() => {
  const map = loadMap()
  const today = toTodayKey()
  if (map[today]?.records) records.value = map[today].records
})

watch(records, (arr) => {
  const burnKcal = arr.reduce((sum, r) => sum + (Number(r.kcal) || 0), 0)
  const map = loadMap()
  map[toTodayKey()] = { records: arr, burnKcal }
  saveMap(map)
}, { deep: true })

const isModalOpen = ref(false)
const { success } = useToast()

const openModal = () => {
  isModalOpen.value = true
}
const closeModal = () => {
  isModalOpen.value = false
}

const addRecord = payload => {
  records.value = [
    ...records.value,
    {
      id: Date.now(),
      ...payload
    }
  ]
  isModalOpen.value = false
}

const deleteRecord = id => {
  if (confirm('이 기록을 삭제할까요?')) {
    records.value = records.value.filter(r => r.id !== id)
    success('운동 기록이 삭제되었습니다.')
  }
}

const clearAll = () => {
  if (!records.value.length) return
  if (confirm('오늘 등록한 모든 운동 기록을 삭제할까요?')) {
    records.value = []
    const map = loadMap()
    map[toTodayKey()] = { records: [], burnKcal: 0 }
    saveMap(map)
    success('오늘 운동 기록을 모두 삭제했습니다.')
  }
}

const totalMinutes = computed(() =>
  records.value.reduce((sum, r) => sum + (Number(r.minutes) || 0), 0)
)

const totalKcal = computed(() =>
  records.value.reduce((sum, r) => sum + (Number(r.kcal) || 0), 0)
)

const totalCount = computed(() => records.value.length)
</script>

<style scoped>
.exercise-records {
  padding: 24px 32px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
}
.header-actions { display: flex; align-items: center; gap: 8px; }
.title-wrap h2 {
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 4px;
  color: #0A0A0A;
}
.title-wrap .sub {
  font-size: 16px;
  color: #717182;
}
.add-btn {
  background-color: #030213;
  color: #FFFFFF;
  padding: 10px 18px;
  border-radius: 14px;
  font-weight: 600;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 6px;
}
.add-icon {
  width: 16px;
  height: 16px;
}
.summary-section {
  display: flex;
  gap: 16px;
}

.ghost-btn { border: 1px solid #e5e7eb; background: #fff; color: #374151; padding: 10px 14px; border-radius: 12px; cursor: pointer; }
.ghost-btn:hover { border-color: #d1d5db; }
</style>
