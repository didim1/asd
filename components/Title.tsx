import axios from 'axios'
import React from 'react'
import useSWR, { Fetcher } from 'swr'
import { Data } from '../interface'
import styles from '../styles/Home.module.css'


const fetcher: Fetcher<Data['api']> = (url: string) => axios.get(url).then(r => r.data)

const Title = () => {
    const { data } = useSWR(`/api/me`, fetcher)

    if (!data) <h1>Loading</h1>;
    return (
        <h1 className={styles.title}>
            Welcome {data?.name}
        </h1>
    )
}

export default Title