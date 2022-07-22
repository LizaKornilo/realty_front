import React, { ReactNode, useState } from 'react'
import styles from './tabs.module.scss'

interface IProps {
    data: {
       tabName: string,
       tabContent: ReactNode
    }[]
}

const Tabs = ({ data }: IProps) => {
  const [activeTabIndex, setActiveTabIndex] = useState<number>(0)
  return (
      <div className={styles.tabs}>
          <div className={styles.tabs__navbar}>
              {
                  data.map((item, index) =>
                      <div
                          className={`${styles['tabs__navbar-item']}
                            ${index === activeTabIndex && styles['tabs__navbar-active-item']}
                          `}
                          key={index}
                          onClick={() => setActiveTabIndex(index)}
                      >
                          {data[index].tabName}
                      </div>
                  )
              }
          </div>

          <div className={styles.tabs__content}>
              {data[activeTabIndex].tabContent}
          </div>
      </div>
  )
}

export default Tabs
