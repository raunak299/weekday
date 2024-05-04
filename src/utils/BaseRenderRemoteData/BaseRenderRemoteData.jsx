/**
 * Renders remote data based on the state of the data.
 * @param {Object} props - The component props.
 * @param {Object} props.remoteDataState - The state of the remote data.
 * @param {boolean} props.remoteDataState.loading - Indicates if the data is currently loading.
 * @param {boolean} props.remoteDataState.error - Indicates if an error occurred while fetching the data.
 * @param {unknown} props.remoteDataState.data - The fetched data.
 * @param {message} props.remoteDataState.message - The message to be displayed while loading or error.
 * @param {Function} props.render - The render function to be called with the fetched data.
 * @returns {JSX.Element} - The rendered component based on the state of the remote data.
 */

export default function BaseRenderRemoteData({remoteDataState, render}) {
    if(remoteDataState.loading) {
        return <h1>Loading...</h1>
    }
    if(remoteDataState.error) {
        return <h1>Error...</h1>
    }
    return render(remoteDataState.data);
}

