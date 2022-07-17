import { userItem } from "@/types"
const KEY = 'rabbit-profile-75'


export function setProfile(profile: userItem) {
  localStorage.setItem(KEY, JSON.stringify(profile))
}

// export function setProfilt

/**
 * 获取个人信息
 * @returns
 */
export function getProfile(): userItem {
  return JSON.parse(localStorage.getItem(KEY) || '{}')
}

/**
 * 移除个人信息
 */
export function removeProfile(): void {
  localStorage.removeItem(KEY)
}
