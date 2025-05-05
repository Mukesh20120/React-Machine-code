/**
 * @param {number[][][]} schedules
 * @return {number[][]}
 */
function findMeetingSlots(schedules) {
    let flatArray = schedules.flatMap(val => val).sort((a, b) => a[0] - b[0]);
    let ln = flatArray.length;
    let res = [];
  
    // If no meetings scheduled at all — entire day is free
    if (ln === 0) return [[0, 24]];
  
    let [start, end] = flatArray[0];
  
    // If day starts with a free slot
    if (start > 0) res.push([0, start]);
  
    for (let i = 1; i < ln; i++) {
      let [nextS, nextE] = flatArray[i];
  
      if (nextS > end) {
        // Free slot between meetings
        res.push([end, nextS]);
        end = nextE;
      } else {
        // Overlapping or adjacent — merge
        end = Math.max(end, nextE);
      }
    }
  
    // If day ends with a free slot
    if (end < 24) res.push([end, 24]);
  
    return res;
  }
  