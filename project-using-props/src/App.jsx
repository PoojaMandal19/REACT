import React from 'react'

import Card from './components/Card'

const App = () => {

  const jobOpenings = [
  {
    brandLogo: "https://imgs.search.brave.com/87wDYQWz700wZhI76iOtgE_JwP3bo9zSI-l4KZiHRcE/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzdkLzI1/L2E0LzdkMjVhNDhk/ZGNlYWYyZTE1OTYx/NmVkZGUxYzIyOWQ5/LmpwZw",
    companyName: "Google",
    datePosted: "5 days ago",
    post: "Frontend Developer",
    tag1: "Full-time",
    tag2: "Junior Level",
    pay: "$38/hour",
    location: "Mumbai, India"
  },

  {
    brandLogo: "https://download.logo.wine/logo/Microsoft_Store/Microsoft_Store-Logo.wine.png",
    companyName: "Microsoft",
    datePosted: "1 week ago",
    post: "Software Engineer",
    tag1: "Full-time",
    tag2: "Junior Level",
    pay: "$42/hour",
    location: "Bengaluru, India"
  },

  {
    brandLogo: "https://static.vecteezy.com/system/resources/previews/014/018/561/non_2x/amazon-logo-on-transparent-background-free-vector.jpg",
    companyName: "Amazon",
    datePosted: "3 days ago",
    post: "Cloud Support Associate",
    tag1: "Full-time",
    tag2: "Entry Level",
    pay: "$35/hour",
    location: "Hyderabad, India"
  },

  {
    brandLogo: "https://substackcdn.com/image/fetch/$s_!G1lk!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F8ed3d547-94ff-48e1-9f20-8c14a7030a02_2000x2000.jpeg",
    companyName: "Apple",
    datePosted: "2 weeks ago",
    post: "UI/UX Designer",
    tag1: "Part-time",
    tag2: "Junior Level",
    pay: "$40/hour",
    location: "Mumbai, India"
  },

  {
    brandLogo:"https://imgs.search.brave.com/LY2taOaJ164Exo29kfHpylmKkov2r0ZQx1tBlpuDi_s/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMjYv/MTM1LzMyMC9zbWFs/bC9tZXRhLXNvY2lh/bC1tZWRpYS1zeW1i/b2wtbG9nby1kZXNp/Z24taWxsdXN0cmF0/aW9uLWZyZWUtdmVj/dG9yLmpwZw",
    companyName: "Meta",
    datePosted: "10 days ago",
    post: "React Developer",
    tag1: "Full-time",
    tag2: "Mid Level",
    pay: "$45/hour",
    location: "Bengaluru, India"
  },

  {
    brandLogo: "https://www.nvidia.com/content/dam/en-zz/Solutions/about-nvidia/logo-and-brand/nvidia-og-image-white-bg-1200x630.jpg",
    companyName: "NVIDIA",
    datePosted: "4 weeks ago",
    post: "AI/ML Engineer",
    tag1: "Full-time",
    tag2: "Junior Level",
    pay: "$48/hour",
    location: "Pune, India"
  },

  {
    brandLogo: "https://images.ctfassets.net/4cd45et68cgf/Rx83JoRDMkYNlMC9MKzcB/2b14d5a59fc3937afd3f03191e19502d/Netflix-Symbol.png?w=700&h=456",
    companyName: "Netflix",
    datePosted: "6 weeks ago",
    post: "Software Developer",
    tag1: "Full-time",
    tag2: "Senior Level",
    pay: "$55/hour",
    location: "Mumbai, India"
  },

  {
    brandLogo:"https://imgs.search.brave.com/-qBwKN8piKBzA6Q50zYsoiQqe1AVIR7jxciIhNcLEho/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzRkLzNj/L2RmLzRkM2NkZjM5/OGU5NDY5OTFhYTdh/M2M1YzQ5NjBmMDZj/LmpwZw",
    companyName: "Adobe",
    datePosted: "8 weeks ago",
    post: "Frontend Engineer",
    tag1: "Part-time",
    tag2: "Mid Level",
    pay: "$39/hour",
    location: "Noida, India"
  },

  {
    brandLogo:  "https://imgs.search.brave.com/kAWwFBlTaAUqwywGlvO9y5Kf9jBnYmF6CaOsmBAbzjk/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvOTYy/MzU5MTE4L3Bob3Rv/L3BhcmlzLWZyYW5j/ZS10aGUtbG9nby1v/Zi10aGUtc29mdHdh/cmUtYW5kLWNvbXB1/dGVyLXNlcnZpY2Vz/LWNvbXBhbnktaWJt/LWlzLWRpc3BsYXll/ZC1kdXJpbmcuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPUQ0/MjRsSEZOTE1KR3JZ/SnJ4WUJHU1ZGRVpP/Q293TllsT1lMYlFs/SmFUcjA9",
    companyName: "IBM",
    datePosted: "10 weeks ago",
    post: "Backend Developer",
    tag1: "Full-time",
    tag2: "Junior Level",
    pay: "$36/hour",
    location: "Pune, India"
  },

  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnOVjTWaheo4E99cgYZ6y14tpsgHlm0VN8Hw&s",
    companyName: "Oracle",
    datePosted: "12 weeks ago",
    post: "Java Developer",
    tag1: "Full-time",
    tag2: "Mid Level",
    pay: "$41/hour",
    location: "Hyderabad, India"
  }
];

  return (
    <div className='parent'>
    {
      jobOpenings.map(function(elem,idx){
        return <div key={idx}>
            <Card key={idx} company={elem.companyName} post={elem.post} datePosted={elem.datePosted} tag1={elem.tag1} tag2={elem.tag2} pay={elem.pay} location={elem.location} brandLogo={elem.brandLogo} /> 
          </div>

      })
    }
    
    </div>
  )
}

export default App