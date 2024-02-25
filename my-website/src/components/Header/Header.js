import React from 'react'
import './Header.css'
import { Layout, Menu } from 'antd'

const { Header } = Layout
const headerItems = [
  {
    key: 'experience',
    label: (
        <a href= "./experience"> Experience </a>
    )
  },
  { key: 'project', label: 'Project' },
  { key: 'course-note', label: 'Course Note' },
  { key: 'personal', label: 'Personal' },
  { key: 'contact', label: 'Contact' }]

function customHeader () {
  return (
        <Header>
            <div className="logo">
                {/* <img src='winner_technology_logo.jpeg' alt="Personal Logo" />; */}
            </div>
            <h1>David Wang</h1>
            <Menu
                theme="dark"
                mode="horizontal"
                items={headerItems}
                style={{ flex: 1, minWidth: 0 }}>
            </Menu>
        </Header>
  )
}

export default customHeader
