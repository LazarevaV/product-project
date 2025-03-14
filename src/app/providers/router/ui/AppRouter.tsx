import { routeConfig } from 'shared/config/routeConfig/routeConfig';
import  { FC, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom'



const AppRouter = () => {
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<div className='page-wrapper'>
			<Routes>	
					{Object.values(routeConfig).map(({element, path})=> (
						<Route
							key={path}
							element={element}
							path={path}
						/>
					))}

        </Routes>
			</div>
       
      </Suspense>

	)
};

export default AppRouter;